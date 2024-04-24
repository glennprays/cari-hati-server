import {
    CoinTransactionType as CoinTransactionTypeModel,
    CoinTransactionStatus as CoinTransactionStatusEnum,
    CoinTransaction as CoinTransactionModel,
} from 'prisma/postgres/generated/client';

export type CoinTransactionStatus = CoinTransactionStatusEnum;

export class CoinTransactionType implements CoinTransactionTypeModel {
    id: number;
    name: string;
    feePercentage: number;
    createdAt: Date;
}

export class CoinTransaction implements CoinTransactionModel {
    webhookId: string;
    webhookCreated: string;
    coinAmount: number;
    expiresAt: Date;
    bankCode: string;
    id: string;
    userAccountId: string;
    moneyAmount: number;
    transactionFee: number;
    status: CoinTransactionStatus;
    bankAccountNumber: string;
    createdAt: Date;
    updatedAt: Date;
    transactionTypeId: number;
}

export class CoinPackage implements CoinPackage {
    id: number;
    coinAmount: bigint;
    price: number;
}