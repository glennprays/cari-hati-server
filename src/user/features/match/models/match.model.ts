import {
    UserMatch as UserMatchModel,
    MatchStatus as MatchStatusEnum,
} from '../../../../../prisma/mongo/generated/client';

export type MatchStatus = MatchStatusEnum;

export class UserMatch implements UserMatchModel {
    id: string;
    senderId: string;
    receiverId: string;
    liked: boolean;
    status: MatchStatus;
    updatedAt: Date;
    createdAt: Date;
}
