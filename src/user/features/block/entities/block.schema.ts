import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as sc } from 'mongoose';
import { UserAccount } from '../../../entities/user.schema';

@Schema()
export class Blocked extends Document {
    @Prop({ type: sc.Types.ObjectId, ref: UserAccount })
    blocker: sc.Types.ObjectId;

    @Prop({ type: sc.Types.ObjectId, ref: UserAccount })
    blocked: sc.Types.ObjectId;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;
}

export const BlockedSchema = SchemaFactory.createForClass(Blocked);