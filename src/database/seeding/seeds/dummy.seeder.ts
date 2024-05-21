import {
    PersonRole,
    PrismaClient as PostgresClient,
    Prisma as PrismaPostgres,
} from '../../../../prisma/postgres/generated/client';
import {
    Gender,
    MatchClass,
    PrismaClient as MongoClient,
    Prisma as PrismaMongo,
} from '../../../../prisma/mongo/generated/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { hash } from 'argon2';
import { UsersFactory } from '../../factories/users.factory';
import { PersonFactory } from '../../factories/person.factory';
import * as fs from 'fs';

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

    const csvFilePath = 'src/database/seeding/seeds/raw/dummy-users.csv';
    const usersPersons = [];
    const hashPass = await hash('examplePass*123');

    try {
        let data = await readCsv(csvFilePath);
        data = data.replace(/\[([^\]]+)\]/g, (_, match) => {
            return '[' + match.replace(/,/g, ';') + ']';
        });

        const rows = data.split('\n').map((row) => row.split(','));

        rows.forEach((row) => {
            const [
                email,
                role,
                name,
                gender,
                birth,
                description,
                matchClass,
                userPassions,
            ] = row;
            const passionsArray = userPassions.split(';').map((passion) => ({
                name: passion.replace(/\[|\]/g, '').trim(),
                createdAt: new Date(),
                deletedAt: null,
            }));

            const person = PersonFactory.createPerson(
                email,
                role as PersonRole,
                hashPass,
            );
            const user = UsersFactory.createUser(
                name,
                gender as Gender,
                new Date(birth),
                description,
                matchClass as MatchClass,
                passionsArray,
            );

            usersPersons.push({ user, person });
        });
    } catch (err) {
        console.error('Error reading CSV file:', err);
    }

    // insert data to database
    const insertManyPerson = usersPersons.map(async ({ user, person }) => {
        const createdPerson = await postgres.person.upsert({
            where: { email: person.email },
            update: {},
            create: {
                email: person.email,
                password: person.password,
                role: person.role,
            },
        });

        await mongo.user.upsert({
            where: { id: createdPerson.id },
            update: {},
            create: {
                id: createdPerson.id,
                name: user.name,
                photoProfile: user.photoProfile,
                gender: user.gender,
                birth: user.birth,
                description: user.description,
                matchClass: user.matchClass,
                passions: user.passions,
                userGallery: {
                    create: {
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                },
            },
        });
    });

    await Promise.all(insertManyPerson);
    console.log('Success Insert', insertManyPerson.length, 'Persons');
}

async function readCsv(csvFilePath: string) {
    const data = await fs.promises.readFile(csvFilePath, 'utf8');
    return data;
}
