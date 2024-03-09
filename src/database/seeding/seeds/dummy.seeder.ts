import { PrismaClient as PostgresClient } from '../../../../prisma/postgres/generated/client';
import { PrismaClient as MongoClient } from '../../../../prisma/mongo/generated/client';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export async function dummySeeder(
    mongo: MongoClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
    postgres: PostgresClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
): Promise<void> {
    const person = await postgres.person.upsert({
        where: { email: 'pragib2@gmail.com' },
        update: {},
        create: {
            email: 'pragib2@gmail.com',
            password: 'PraGib123',
            role: 'user',
            activatedAt: new Date(),
        },
    });

    const user = await mongo.user.upsert({
        where: { id: person.id },
        update: {},
        create: {
            id: person.id,
            name: 'PraGib',
            photoProfile: {
                path: 'https://randomuser.me/api/portraits',
                updatedAt: new Date(),
            },
            gender: 'male',
            birth: '1951-08-17T00:00:00Z',
            description: 'lelaki ganteng dari majalaya',
        },
    });
}
