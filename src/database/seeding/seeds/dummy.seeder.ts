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
    mongo: MongoClient<PrismaMongo.PrismaClientOptions, never, DefaultArgs>,
    postgres: PostgresClient<
        PrismaPostgres.PrismaClientOptions,
        never,
        DefaultArgs
    >,
): Promise<void> {
    const personMale = await postgres.person.upsert({
        where: { email: 'praroro@mail7.io' },
        update: {},
        create: {
            email: 'praroro@mail7.io',
            password: await hash('examplePass*123'),
            role: 'user',
            activatedAt: new Date(),
        },
    });

    const personFemale = await postgres.person.upsert({
        where: { email: 'titiek@mail7.io' },
        update: {},
        create: {
            email: 'titiek@mail7.io',
            password: await hash('examplePass*123'),
            role: 'user',
            activatedAt: new Date(),
        },
    });

    const userMale = await mongo.user.upsert({
        where: { id: personMale.id },
        update: {},
        create: {
            id: personMale.id,
            name: 'Praroro',
            photoProfile: null,
            gender: 'male',
            birth: '1951-08-17T00:00:00Z',
            description: 'Handsome and hard worker man',
            matchClass: 'C',
            passions: [
                { name: 'reading' },
                { name: 'writing' },
                { name: 'cooking' },
                { name: 'gardening' },
                { name: 'hiking' },
            ],
            userGallery: {
                create: {
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            },
        },
    });

    const userFemale = await mongo.user.upsert({
        where: { id: personFemale.id },
        update: {},
        create: {
            id: personFemale.id,
            name: 'Titiek',
            photoProfile: null,
            gender: 'female',
            birth: '1951-08-17T00:00:00Z',
            description: 'Humble and kind',
            matchClass: 'C',
            passions: [
                { name: 'reading' },
                { name: 'learning' },
                { name: 'writing' },
                { name: 'photography' },
                { name: 'volunteering' },
            ],
            userGallery: {
                create: {
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            },
        },
    });
    const matchId = `${userMale.id}-${userFemale.id}`;
    await mongo.userMatch.upsert({
        where: {
            id: matchId,
        },
        update: {},
        create: {
            id: matchId,
            sender: { connect: { id: userMale.id } },
            receiver: { connect: { id: userFemale.id } },
            status: 'accepted',
            liked: false,
        },
    });
}
