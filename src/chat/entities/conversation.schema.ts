import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as sc } from 'mongoose';
import { UserMatched } from 'src/user/features/match/entities/match.schema';

@Schema()
export class Conversation extends Document {
    @Prop({ type: sc.Types.ObjectId, ref: UserMatched })
    matchedId: sc.Types.ObjectId;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
