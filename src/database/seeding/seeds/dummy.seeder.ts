import {
    PrismaClient as PostgresClient,
    Prisma as PrismaPostgres,
} from '../../../../prisma/postgres/generated/client';
import {
    PrismaClient as MongoClient,
    Prisma as PrismaMongo,
} from '../../../../prisma/mongo/generated/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { hash } from 'argon2';

export async function dummySeeder(
    mongo: MongoClient<PrismaPostgres.PrismaClientOptions, never, DefaultArgs>,
    postgres: PostgresClient<
        PrismaMongo.PrismaClientOptions,
        never,
        DefaultArgs
    >,
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

    const userGallery = await mongo.userGallery.create({
        data: {
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    });

    await mongo.user.upsert({
        where: { id: person.id },
        update: {},
        create: {
            id: person.id,
            name: 'Pragib',
            photoProfile: null,
            gender: 'male',
            birth: '1951-08-17T00:00:00Z',
            description: 'Handsome man from Majalaya',
            passions: [
                { name: 'hiking' },
                { name: 'camping' },
                { name: 'biking' },
                { name: 'running' },
                { name: 'woodworking' },
            ],
            userGalleryId: userGallery.id,
        },
    });
}
