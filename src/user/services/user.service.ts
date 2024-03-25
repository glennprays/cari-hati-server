import { BadRequestException, Injectable } from '@nestjs/common';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { PersonService } from './person.service';
import { PersonTokenPayload } from 'src/auth/models/payload.model';
import { User } from '../models/user.model';
import { Gender, MatchStatus, UserMatch } from 'prisma/mongo/generated/client';
import { UserUpdateDTO } from '../dtos/user.dto';
import { hash, verify } from 'argon2';
import { S3Service } from 'src/common/s3/s3.service';
import { randomUUID } from 'node:crypto';
import { compressAndConvertToJPEG, resizeImage } from 'src/utils/image.util';

@Injectable()
export class UserService {
    constructor(
        private mongoService: MongoService,
        private personService: PersonService,
        private s3Service: S3Service,
    ) {}

    async findOneById(id: string) {
        const user = await this.mongoService.user.findUnique({
            where: { id: id },
        });
        return user;
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
            return await verify(token, refreshToken);
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
        data: PersonTokenPayload,
        name: string,
        gender: Gender,
        birth: Date,
        description: string,
    ): Promise<User | null> {
        const person = await this.personService.findOneByEmail(data.username);
        const user = await this.mongoService.user.findUnique({
            where: {
                id: person.id,
            },
        });
        if (user) {
            throw new BadRequestException('User already exist');
        }
        const userGallery = await this.mongoService.userGallery.create({
            data: {
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        return await this.mongoService.user.create({
            data: {
                id: person.id,
                name: name,
                gender: gender,
                birth: birth,
                description: description,
                photoProfile: null,
                LoginSession: {
                    create: {
                        refreshTokens: {
                            set: [],
                        },
                    },
                },
                userGalleryId: userGallery.id,
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

    async findAllMatchesByUserId(userId: string) {
        const userMatches = await this.mongoService.userMatch.findMany({
            where: {
                OR: [
                    { senderId: userId },
                    { receiverId: userId }
                ]
            }
        });
        const filteredUserMatches = userMatches.map(match => {
            const { senderId, ...rest } = match;
            return rest;
        });
    
        return filteredUserMatches;
    
    }
    

}
