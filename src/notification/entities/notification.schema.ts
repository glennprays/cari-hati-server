import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as sc } from 'mongoose';
import { UserAccount } from '../../user/entities/user.schema';

export enum NotificationType {
    MATCH = 'match',
    LIKE = 'like',
    ANOUCEMENT = 'anoucement',
    WARNING = 'warning',
}

@Schema()
export class Data extends Document {
    @Prop({ type: sc.Types.ObjectId, ref: UserAccount})
    userId: sc.Types.ObjectId;
}

@Schema()
export class UserNotification extends Document {

    @Prop({type: String, enum: NotificationType, required: true})
    type: NotificationType;

    @Prop({ type: sc.Types.ObjectId, ref: UserAccount})
    userId: sc.Types.ObjectId;

    @Prop({ type: String, required: true })
    title: string;

    @Prop({ type: String, required: true })
    body: string

    @Prop({ type: Data, default: null })
    data?: Data;

    @Prop({ type: Date, default: null })
    readAt: Date;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;
}

export const UserNotificationSchema = SchemaFactory.createForClass(UserNotification);