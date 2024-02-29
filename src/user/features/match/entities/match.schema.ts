import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as sc } from 'mongoose';
import { UserAccount } from '../../../entities/user.schema';

export enum MatchStatus {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
}

@Schema()
export class UserMatched extends Document {
    @Prop({ type: sc.Types.ObjectId, ref: UserAccount })
    sender: sc.Types.ObjectId;

    @Prop({ type: sc.Types.ObjectId, ref: UserAccount })
    receiver: sc.Types.ObjectId;

    @Prop({ type: Boolean, default: false })
    liked: boolean;

    @Prop({ type: String, enum: MatchStatus, default: MatchStatus.PENDING })
    status: MatchStatus;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;
}

export const UserMatchedSchema = SchemaFactory.createForClass(UserMatched);
