import {
    PrismaClient as MongoClient,
    Prisma as PrismaMongo,
} from '../../../../prisma/mongo/generated/client';
import {
    PrismaClient as PostgresClient,
    Prisma as PrismaPostgres,
} from '../../../../prisma/postgres/generated/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import * as rawData from './raw/structural.json';
import { PassionFactory } from '../../factories/passion.factory';

import * as dotenv from 'dotenv';

dotenv.config();

export async function structuralSeeder(
    mongo: MongoClient<PrismaMongo.PrismaClientOptions, never, DefaultArgs>,
    postgres: PostgresClient<
        PrismaPostgres.PrismaClientOptions,
        never,
        DefaultArgs
    >,
): Promise<void> {
    const passions = await PassionFactory.createMany(rawData.passions);
    const createManyPassions = passions.map((passion) =>
        mongo.passion.upsert({
            where: { name: passion.name },
            update: {},
            create: passion,
        }),
    );
    Promise.all(createManyPassions);

    const coinTransactionTypes = rawData.coinTransactionTypes.map((type) =>
        postgres.coinTransactionType.upsert({
            where: { name: type.name },
            update: {},
            create: type,
        }),
    );
    Promise.all(coinTransactionTypes);

    const coinPackages = rawData.coinPackage.map((coinPackage) => ({
        coinAmount: coinPackage.coinAmount,
        price: coinPackage.price,
    }));
    const createManyCoinPackages = coinPackages.map((coinPackage) =>
        postgres.coinPackage.upsert({
            where: {
                coinAmount_price: {
                    coinAmount: coinPackage.coinAmount,
                    price: coinPackage.price,
                },
            },
            update: {},
            create: coinPackage,
        }),
    );

    await Promise.all(createManyCoinPackages);

    const objectUrl = process.env.S3_BUCKET_URL;

    const createManyGiftItems = rawData.giftItems.map((giftItem) =>
        postgres.giftItem.upsert({
            where: {
                name: giftItem.name,
            },
            update: {},
            create: {
                name: giftItem.name,
                coinAmount: giftItem.amount,
                imagePath: `${objectUrl}/data/${giftItem.image}`,
            },
        }),
    );

    await Promise.all(createManyGiftItems);
}
