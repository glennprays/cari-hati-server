import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { User } from '../models/user.model';
import { Gender, LoginData } from 'prisma/mongo/generated/client';
import { UserUpdateDTO } from '../dtos/user.dto';
import { hash, verify } from 'argon2';
import { S3Service } from 'src/common/s3/s3.service';
import { randomUUID } from 'node:crypto';
import { compressAndConvertToJPEG, resizeImage } from 'src/utils/image.util';
import { DataService } from 'src/data/data.service';
import { FcmService } from 'src/common/firebase/fcm/fcm.service';
import { Message } from 'firebase-admin/lib/messaging/messaging-api';
import { NotificationService } from 'src/notification/services/notification.service';
import { MatchService } from '../features/match/match.service';
import { PassionDTO } from 'src/data/dtos/passion.dto';
import { PostgresService } from 'src/common/database/postgres/postgres.service';
import { PhotoGalleryService } from '../features/photo-gallery/photo-gallery.service';

@Injectable()
export class UserService {
    constructor(
        private mongoService: MongoService,
        private s3Service: S3Service,
        private dataService: DataService,
        private fcmSevice: FcmService,
        private notificationService: NotificationService,
        private matchService: MatchService,
        private postgresService: PostgresService,
        private photoGalleryService: PhotoGalleryService,
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
        try {
            const loginData = await this.mongoService.loginSession.findFirst({
                where: {
                    userId: userId,
                },
                select: {
                    data: {
                        select: {
                            refreshToken: true,
                        },
                    },
                },
            });

            const refreshTokens = loginData.data.map((val) => val.refreshToken);

            let token = null;
            for (const data of refreshTokens) {
                if (
                    (await verify(data.token, refreshToken)) &&
                    data.expires > new Date()
                ) {
                    token = data;
                }
            }
            if (!token) {
                throw new UnauthorizedException();
            }
            return token;
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    async addLoginSession(
        userId: string,
        refreshToken: string,
        refreshTokenExpires: Date,
        fcmToken: string,
    ) {
        refreshToken = await hash(refreshToken);
        return await this.mongoService.loginSession.upsert({
            where: {
                userId: userId,
            },
            update: {
                data: {
                    push: {
                        fcmToken: fcmToken,
                        refreshToken: {
                            token: refreshToken,
                            expires: refreshTokenExpires,
                        },
                    },
                },
            },
            create: {
                userId: userId,
                data: {
                    fcmToken: fcmToken,
                    refreshToken: {
                        token: refreshToken,
                        expires: refreshTokenExpires,
                    },
                },
            },
        });
    }

    async removeLoginSession(userId: string, refreshToken: string) {
        const { data } = await this.mongoService.loginSession.findUnique({
            where: {
                userId: userId,
            },
            select: {
                data: {
                    select: {
                        refreshToken: true,
                        fcmToken: true,
                    },
                },
            },
        });
        const verifyToken = async (token: string) => {
            return token ? await verify(token, refreshToken) : false;
        };

        const loginResult: LoginData[] = [];
        for (const login of data) {
            if (
                (await verifyToken(login.refreshToken.token)) ||
                login.refreshToken.expires < new Date()
            ) {
                continue;
            }
            loginResult.push(login);
        }
        return await this.mongoService.loginSession.updateMany({
            where: {
                userId: userId,
            },
            data: {
                data: {
                    set: loginResult,
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
            user.photoProfile.path = `${process.env.S3_BUCKET_URL}/${user.photoProfile.path}`;
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

    async getUserNotifications(
        userId: string,
        limit?: number,
        offset?: number,
    ) {
        try {
            return await this.notificationService.getUserNotifications(
                userId,
                limit,
                offset,
            );
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async updateNotificationReadAt(userId: string, notificationId: string) {
        return await this.notificationService.updateNotificationReadAt(
            userId,
            notificationId,
        );
    }

    async updateUserPassions(userId: string, data: PassionDTO[]) {
        try {
            data = [...new Set(data)];
            if (data.length !== 5) {
                throw new BadRequestException('Passions should be 5');
            }
            const passions = await this.dataService.getPassionsByIds(data);
            if (passions.length !== 5) {
                throw new BadRequestException('Passions not found');
            }
            const matchClass =
                await this.matchService.calculateUserMatchClass(passions);
            const user = await this.mongoService.user.update({
                where: {
                    id: userId,
                },
                data: {
                    passions: {
                        set: passions.map((val) => {
                            return {
                                name: val.name,
                                createdAt: new Date(),
                            };
                        }),
                    },
                    matchClass: matchClass,
                },
                select: {
                    passions: true,
                },
            });
            return user.passions;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async getUserPassions(userId: string) {
        try {
            const user = await this.mongoService.user.findUnique({
                where: {
                    id: userId,
                },
                select: {
                    passions: true,
                },
            });
            return user.passions;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async getUnreadNotificationCount(userId: string) {
        return await this.notificationService.getUnreadNotificationCount(
            userId,
        );
    }

    async getUserCoins(userId: string) {
        try {
            const user = await this.mongoService.user.findUnique({
                where: {
                    id: userId,
                },
                select: {
                    coinAmount: true,
                },
            });
            return user.coinAmount;
        } catch (error) {
            throw new BadRequestException('Failed to get user coins');
        }
    }

    async updateUserCoins(userId: string, coinAmount: number) {
        try {
            return await this.mongoService.user.update({
                where: {
                    id: userId,
                },
                data: {
                    coinAmount: {
                        increment: coinAmount,
                    },
                },
            });
        } catch (error) {
            throw new BadRequestException('Failed to update user coins');
        }
    }

    async getUserGiftTransactions(
        userId: string,
        type?: 'sent' | 'received',
        limit?: number,
        offset?: number,
    ) {
        try {
            const user = await this.findOneById(userId);
            if (!user) {
                throw new Error('User not exist');
            }
            const queryParam = {
                OR: [
                    {
                        senderAccountId: userId,
                    },
                    {
                        receiverAccountId: userId,
                    },
                ],
            };
            const param = {
                where: queryParam,
                take: limit | 20,
                skip: offset | 0,
            };
            if (type) {
                if (type === 'sent') {
                    queryParam.OR = [
                        {
                            senderAccountId: userId,
                        },
                    ];
                } else {
                    queryParam.OR = [
                        {
                            receiverAccountId: userId,
                        },
                    ];
                }
            }
            const transactions =
                await this.postgresService.giftTransaction.findMany(param);
            return transactions;
        } catch (error) {
            throw new Error('Error while fetching gift transactions');
        }
    }

    async getUserCoinTransactions(
        userId: string,
        type?: 'topup' | 'withdraw',
        limit?: number,
        offset?: number,
    ) {
        try {
            const user = await this.findOneById(userId);
            if (!user) {
                throw new Error('User not exist');
            }
            const queryParam: any = {
                userAccountId: userId,
            };
            const param = {
                where: queryParam,
                take: limit | 20,
                skip: offset | 0,
            };
            if (type) {
                queryParam.coinTransactionType = {
                    name: type,
                };
            }
            const transactions =
                await this.postgresService.coinTransaction.findMany(param);
            return transactions;
        } catch (error) {
            throw new Error('Error while fetching coin transactions');
        }
    }

    async getUserPaymentByBankAccountNumber(
        userId: string,
        bankAccountNumber: string,
    ) {
        try {
            const payment =
                await this.postgresService.coinTransaction.findUnique({
                    where: {
                        userAccountId: userId,
                        bankAccountNumber: bankAccountNumber,
                    },
                });
            if (!payment) {
                throw new Error('Payment not found');
            }
            return payment;
        } catch (error) {
            throw new Error('Error while fetching payment');
        }
    }

    // DEBUG: this just for testing firebase messaging
    async testNotificationToUser(message: Message) {
        console.log(message);
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

    async blockUser(userId: string, targetId: string) {
        try {
            if (userId === targetId) {
                throw new BadRequestException('Cannot block self');
            }
            const existingBlockedUser =
                await this.mongoService.blocked.findFirst({
                    where: {
                        blockerId: userId,
                        blockedId: targetId,
                    },
                });

            if (existingBlockedUser) {
                throw new BadRequestException('User already blocked');
            }

            const userMatch = await this.mongoService.userMatch.findFirst({
                where: {
                    OR: [
                        {
                            senderId: userId,
                            receiverId: targetId,
                        },
                        {
                            senderId: targetId,
                            receiverId: userId,
                        },
                    ],
                },
            });

            if (!userMatch) {
                throw new BadRequestException('User not matched');
            }

            await this.mongoService.userMatch.delete({
                where: {
                    id: userMatch.id,
                },
            });

            return await this.mongoService.blocked.create({
                data: {
                    blockerId: userId,
                    blockedId: targetId,
                    createdAt: new Date(),
                },
            });
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error.message);
        }
    }

    async getUserGallery(userId: string) {
        try {
            const photos = await this.photoGalleryService.getUserPhotos(userId);
            return photos;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async addPhotoToUserGallery(userId: string, image: Express.Multer.File) {
        return await this.photoGalleryService.addPhotoToGallery(userId, image);
    }

    async deletePhotoFromUserGallery(userId: string, photoId: string) {
        return await this.photoGalleryService.deletePhotoFromGallery(
            userId,
            photoId,
        );
    }
}
