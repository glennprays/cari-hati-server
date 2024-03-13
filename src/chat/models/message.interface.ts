import { Schema } from 'mongoose';

export interface Message {
    conversationId: Schema.Types.ObjectId;
    sender: Schema.Types.ObjectId;
    text: string;
    imageAttachment?: string;
    createdAt: Date;
}
