import {
    GiftItem as GiftItemModel,
    GiftTransaction as GiftTransactionModel,
} from 'prisma/postgres/generated/client';

export class GiftItem implements GiftItemModel {
    coinAmount: number;
    id: string;
    name: string;
    imagePath: string;
    createdAt: Date;
}

export class GiftTransaction implements GiftTransactionModel {
    id: string;
    senderAccountId: string;
    receiverAccountId: string;
    coinAmount: bigint;
    createdAt: Date;
    giftItemId: string;
}
