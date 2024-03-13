import { Conversation as ConversationModel } from '../../../prisma/mongo/generated/client';

export class Conversation implements ConversationModel {
    id: string;
    matchId: string;
    createdAt: Date;
}
