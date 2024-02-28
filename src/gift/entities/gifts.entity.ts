import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class GiftItem {
    @PrimaryGeneratedColumn('uuid')
    giftItemId: string;

    @Column()
    name: string;

    @Column('bigint')
    coinAmount: number;

    @Column()
    imagePath: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany(
        () => GiftTransaction,
        (giftTransaction) => giftTransaction.giftItem,
    )
    giftTransactions: GiftTransaction[];
}

@Entity()
export class GiftTransaction {
    @PrimaryGeneratedColumn('uuid')
    giftTransactionId: string;

    @ManyToOne(() => GiftItem, (giftItem) => giftItem.giftItemId)
    giftItem: GiftItem;

    @Column()
    senderAccountId: string;

    @Column()
    receiverAccountId: string;

    @Column('bigint')
    coinAmount: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
