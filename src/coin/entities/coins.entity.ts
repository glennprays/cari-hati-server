import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    Unique,
    ManyToOne,
    OneToMany,
} from 'typeorm';

export enum TransactionStatus {
    WAITING = 'WAITING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
}

@Entity()
@Unique(['name'])
export class CoinTransactionType {
    @PrimaryGeneratedColumn()
    transactionTypeId: number;

    @Column()
    name: string;

    @Column()
    feePercentage: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany(
        () => CoinTransaction,
        (coinTransaction) => coinTransaction.transactionType,
    )
    coinTransactions: CoinTransaction[];
}

@Entity()
export class CoinTransaction {
    @PrimaryGeneratedColumn('uuid')
    transactionId: string;

    @Column()
    userAccountId: string;

    @ManyToOne(
        () => CoinTransactionType,
        (coinTransactionType) => coinTransactionType.coinTransactions,
    )
    transactionType: CoinTransactionType;

    @Column('bigint')
    coinAmount: number;

    @Column()
    moneyAmount: number;

    @Column()
    transactionFee: number;

    @Column({
        type: 'enum',
        enum: TransactionStatus,
        default: TransactionStatus.WAITING,
    })
    status: TransactionStatus;

    @Column('bigint')
    bankAccountNumber: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
