import {
    Notification as NotificationModel,
    NotificationType as NotificationTypeEnum,
    NotificationData as NotificationDataModel,
} from '../../../prisma/mongo/generated/client';

export type NotificationType = NotificationTypeEnum;

export class NotificationData implements NotificationDataModel {
    userId: string;
}
export class Notification implements NotificationModel {
    id: string;
    userId: string;
    title: string;
    body: string;
    readAt: Date;
    type: NotificationType;
    createdAt: Date;
    data: NotificationData;
}
