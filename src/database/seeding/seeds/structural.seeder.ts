import { Prisma as PrismaPostgres } from '../../../../prisma/postgres/generated/client';
import { PrismaClient as MongoClient } from '../../../../prisma/mongo/generated/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import * as rawData from './raw/structural.json';
import { PassionFactory } from '../../factories/passion.factory';

export async function structuralSeeder(
    mongo: MongoClient<PrismaPostgres.PrismaClientOptions, never, DefaultArgs>,
): Promise<void> {
    // await mongo.passion.upsert({
    //     where: { name: 'Music' },
    //     update: {},
    //     create: { name: 'Music' },
    // });
    console.log('in seeder');
    const passions = await PassionFactory.createMany(rawData.passions);
    const createManyPassions = passions.map((passion) =>
        mongo.passion.create({ data: passion }),
    );
    Promise.all(createManyPassions);
}
