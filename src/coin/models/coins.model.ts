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
    id: string;
    userAccountId: string;
    coinAmount: bigint;
    moneyAmount: number;
    transactionFee: number;
    status: CoinTransactionStatus;
    bankAccountNumber: bigint;
    createdAt: Date;
    updatedAt: Date;
    transactionTypeId: number;
}

export class CoinPackage implements CoinPackage {
    id: number;
    coinAmount: bigint;
    price: number;
}
