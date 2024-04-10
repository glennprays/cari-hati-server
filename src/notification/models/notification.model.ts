import {
    Notification as NotificationModel,
    NotificationType as NotificationTypeEnum,
    $Enums,
} from '../../../prisma/mongo/generated/client';

export type NotificationType = NotificationTypeEnum;

export class Notification implements NotificationModel {
    id: string;
    userId: string;
    title: string;
    body: string;
    path: string;
    readAt: Date;
    type: $Enums.NotificationType;
    createdAt: Date;
}
