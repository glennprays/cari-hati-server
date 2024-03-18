import { PrismaClient as PostgresClient, Prisma as PrismaPostgres } from '../../../../prisma/postgres/generated/client';
import { PrismaClient as MongoClient, Prisma as PrismaMongo } from '../../../../prisma/mongo/generated/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { hash } from 'argon2';

export async function dummySeeder(
    mongo: MongoClient<PrismaPostgres.PrismaClientOptions, never, DefaultArgs>,
    postgres: PostgresClient<PrismaMongo.PrismaClientOptions, never, DefaultArgs>,
): Promise<void> {
    const person = await postgres.person.upsert({
        where: { email: 'pragib2@gmail.com' },
        update: {},
        create: {
            email: 'pragib2@gmail.com',
            password: await hash('PraGib123'),
            role: 'user',
            activatedAt: new Date(),
        },
    });

    await mongo.user.upsert({
        where: { id: person.id },
        update: {},
        create: {
            id: person.id,
            name: 'Pragib',
            photoProfile: {
                path: 'https://randomuser.me/api/portraits',
                updatedAt: new Date(),
            },
            gender: 'male',
            birth: '1951-08-17T00:00:00Z',
            description: 'Handsome man from Majalaya',
            passions: [
                { name: 'Dancing' },
                { name: 'Singing' },
                { name: 'Reading' },
                { name: 'Traveling' },
                { name: 'Cooking' },
            ],
        },
    });
}
