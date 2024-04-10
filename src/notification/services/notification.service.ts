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
}
