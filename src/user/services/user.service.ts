import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { PersonService } from './person.service';
import { User } from '../models/user.model';
import { Gender, MatchStatus } from 'prisma/mongo/generated/client';
import { UserUpdateDTO } from '../dtos/user.dto';
import { hash, verify } from 'argon2';
import { S3Service } from 'src/common/s3/s3.service';
import { randomUUID } from 'node:crypto';
import { compressAndConvertToJPEG, resizeImage } from 'src/utils/image.util';
import { FcmService } from 'src/common/firebase/fcm/fcm.service';
import { Message } from 'firebase-admin/lib/messaging/messaging-api';

@Injectable()
export class UserService {
    constructor(
        private mongoService: MongoService,
        private personService: PersonService,
        private s3Service: S3Service,
        private fcmSevice: FcmService,
    ) {}

    async findOneById(id: string) {
        const user = await this.mongoService.user.findUnique({
            where: { id: id },
        });
        if (user.photoProfile) {
            user.photoProfile.path = `${process.env.S3_BUCKET_URL}/${user.photoProfile.path}`;
        }
        return user;
    }

    async findRefreshToken(userId: string, refreshToken: string) {
        const loginSession = await this.mongoService.loginSession.findFirst({
            where: {
                userId: userId,
            },
        });
        const verifyToken = async (token: string) => {
            return token ? await verify(token, refreshToken) : false;
        };
        const status = loginSession.refreshTokens.some(async (token) => {
            return (
                (await verifyToken(token.token)) && token.expires > new Date()
            );
        });
        if (!status) {
            throw new UnauthorizedException();
        }
        return loginSession;
    }

    async addLoginSession(
        userId: string,
        refreshToken: string,
        refreshTokenExpires: Date,
    ) {
        refreshToken = await hash(refreshToken);
        return await this.mongoService.loginSession.upsert({
            where: {
                userId: userId,
            },
            update: {
                refreshTokens: {
                    push: {
                        token: refreshToken,
                        expires: refreshTokenExpires,
                    },
                },
            },
            create: {
                userId: userId,
                refreshTokens: {
                    set: [
                        {
                            token: refreshToken,
                            expires: refreshTokenExpires,
                        },
                    ],
                },
            },
        });
    }

    async removeLoginSession(userId: string, refreshToken: string) {
        const { refreshTokens } =
            await this.mongoService.loginSession.findUnique({
                where: {
                    userId: userId,
                },
                select: {
                    refreshTokens: true,
                },
            });
        const verifyToken = async (token: string) => {
            return token ? await verify(token, refreshToken) : false;
        };
        const result = [];
        for (const token of refreshTokens) {
            if (
                (await verifyToken(token.token)) ||
                token.expires < new Date()
            ) {
                continue;
            }
            result.push(token);
        }
        if (result.length === 0) {
            result.push({
                token: '',
                expires: new Date(),
            });
        }
        return await this.mongoService.loginSession.update({
            where: {
                userId: userId,
            },
            data: {
                refreshTokens: {
                    set: result,
                },
            },
        });
    }

    async inputPersonalData(
        userId: string,
        name: string,
        gender: Gender,
        birth: Date,
        description: string,
    ): Promise<User | null> {
        const user = await this.mongoService.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (user.name) {
            throw new BadRequestException('User already exist');
        }
        return await this.mongoService.user.update({
            where: {
                id: userId,
            },
            data: {
                name: name,
                gender: gender,
                birth: birth,
                description: description,
                photoProfile: null,
            },
        });
    }

    async updateUser({
        userId,
        name,
        gender,
        birth,
        description,
    }: {
        userId: string;
        name?: string;
        gender?: Gender;
        birth?: Date;
        description?: string;
    }): Promise<User | null> {
        const updateData: UserUpdateDTO & { updatedAt: Date } = {
            updatedAt: new Date(),
        };

        if (name) {
            updateData.name = name;
        }

        if (gender) {
            updateData.gender = gender;
        }

        if (birth) {
            updateData.birth = birth;
        }

        if (description) {
            updateData.description = description;
        }

        const updateUser = await this.mongoService.user.update({
            where: {
                id: userId,
            },
            data: updateData,
        });
        return updateUser;
    }

    async userRequestMatch(
        senderId: string,
        receiverId: string,
        liked?: boolean,
    ) {
        if (senderId == receiverId) {
            throw new BadRequestException('');
        }
        const userMatch = await this.mongoService.userMatch.findFirst({
            where: {
                senderId: senderId,
                receiverId: receiverId,
                status: {
                    not: MatchStatus.ignored,
                },
            },
        });

        if (userMatch) {
            throw new BadRequestException('User already have matched data');
        }
        return await this.mongoService.userMatch.create({
            data: {
                sender: {
                    connect: {
                        id: senderId,
                    },
                },
                receiver: {
                    connect: {
                        id: receiverId,
                    },
                },
                liked: liked || false,
                status: MatchStatus.pending,
            },
        });
    }

    async updateUserPhotoProfile(userId: string, image: Express.Multer.File) {
        const filename = `${randomUUID()}.jpg`;

        try {
            image = await compressAndConvertToJPEG(image);
            image = await resizeImage(image);
            const user = await this.mongoService.user.update({
                where: {
                    id: userId,
                },
                data: {
                    photoProfile: {
                        path: filename,
                        updatedAt: new Date(),
                    },
                },
                select: {
                    photoProfile: true,
                },
            });
            await this.s3Service.uploadAObject(filename, image);
            return user;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async deleteUserPhotoProfile(userId: string) {
        try {
            const user = await this.mongoService.user.update({
                where: {
                    id: userId,
                },
                data: {
                    photoProfile: null,
                },
                select: {
                    photoProfile: true,
                },
            });
            await this.s3Service.deleteAObject(user.photoProfile.path);
            return { message: 'Photo profile deleted' };
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async findAllMatchesByUserId(userId: string, accepted_only?: boolean) {
        const whereClause: any = {
            OR: [{ senderId: userId }, { receiverId: userId }],
        };

        if (accepted_only) {
            whereClause.status = MatchStatus.accepted;
        }

        const userMatches = await this.mongoService.userMatch.findMany({
            where: whereClause,
        });

        return userMatches;
    }

    async unmatchWithUser(currentUser: string, targetUser: string) {
        try {
            const unmatch = await this.mongoService.userMatch.deleteMany({
                where: {
                    OR: [
                        {
                            senderId: currentUser,
                            receiverId: targetUser,
                        },
                        {
                            senderId: targetUser,
                            receiverId: currentUser,
                        },
                    ],
                    status: MatchStatus.accepted,
                },
            });

            if (unmatch.count === 0) {
                throw new Error('Unmatch Failed');
            }

            return { message: 'Unmatched successfully' };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    // DEBUG: this just for testing firebase messaging
    async sendNotificationToUser(message: Message) {
        try {
            const parts = (await this.fcmSevice.sendMessage(message)).split(
                '/',
            );
            const notificationId = parts[parts.length - 1];
            return notificationId;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }
}
