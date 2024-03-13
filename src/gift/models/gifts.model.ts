import {
    GiftItem as GiftItemModel,
    GiftTransaction as GiftTransactionModel,
} from 'prisma/postgres/generated/client';

export class GiftItem implements GiftItemModel {
    id: string;
    name: string;
    coinAmount: bigint;
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
