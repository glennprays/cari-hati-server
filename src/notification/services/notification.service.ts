import { BadRequestException, Injectable } from '@nestjs/common';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { FcmService } from 'src/common/firebase/fcm/fcm.service';
import { NotificationType } from 'prisma/mongo/generated/client';
import { NotificationMessageDTO } from 'src/user/dtos/notification.dto';

@Injectable()
export class NotificationService {
    constructor(
        private mongoService: MongoService,
        private fcmService: FcmService,
    ) {}
    async sendNotificationToUser(
        userId: string,
        type: NotificationType,
        notificationMessage: NotificationMessageDTO,
        path?: string,
    ) {
        try {
            const loginSession =
                await this.mongoService.loginSession.findUnique({
                    where: {
                        userId: userId,
                    },
                    select: {
                        data: {
                            select: {
                                fcmToken: true,
                            },
                        },
                    },
                });

            if (!loginSession) {
                throw new BadRequestException('User not found');
            }

            const fcmTokens = loginSession.data.map((val) => val.fcmToken);
            console.log("tes",fcmTokens)
            if (!fcmTokens) {
                throw new BadRequestException('FCM token not found');
            }

            await this.mongoService.notification.create({
                data: {
                    title: notificationMessage.notification.title,
                    body: notificationMessage.notification.body,
                    path: path,
                    userId: userId,
                    type: type,
                },
            });

            await this.fcmService.sendMessageToMultipleDevices({
                tokens: fcmTokens,
                ...notificationMessage,
            });
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async getUserNotifications(
        userId: string,
        limit: number = 20,
        offset: number = 0,
    ) {
        try {
            return await this.mongoService.notification.findMany({
                where: {
                    userId: userId,
                },
                take: limit | 20,
                skip: offset | 0,
                orderBy: {
                    createdAt: 'desc',
                },
            });
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async updateNotificationReadAt(userId: string, notificationId: string) {
        try {
            const notification =
                await this.mongoService.notification.findUnique({
                    where: {
                        id: notificationId,
                        userId: userId,
                    },
                    select: {
                        readAt: true,
                    },
                });
            if (!notification) {
                throw new BadRequestException('Notification not found');
            } else if (notification.readAt) {
                throw new BadRequestException('Notification already read');
            }
            return await this.mongoService.notification.update({
                where: {
                    id: notificationId,
                    userId: userId,
                },
                data: {
                    readAt: new Date(),
                },
            });
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async getUnreadNotificationCount(userId: string) {
        try {
            const notifications = await this.mongoService.notification.findMany(
                {
                    where: {
                        userId: userId,
                    },
                },
            );
            return notifications.filter((val) => !val.readAt).length;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }
}
