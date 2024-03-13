import { Blocked as BlockedModel } from '../../../../../prisma/mongo/generated/client';

export class Blocked implements BlockedModel {
    id: string;
    blockerId: string;
    blockedId: string;
    createdAt: Date;
}
