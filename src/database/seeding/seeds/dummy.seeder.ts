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
import { UsersFactory } from '../../factories/users.factory';
import { PersonFactory } from '../../factories/person.factory';


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

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    const csvFilePath = 'src/database/seeding/seeds/raw/dummy-users.csv';
    const usersDummy = [];
    const personDummy = [];
    let persons = [];

    fs.readFile(csvFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading CSV file:', err);
            return;
        }

        const rows = data.split('\n').map(row => row.split(','));

        rows.forEach(async (row) => {
            try {
                const [emails, role,names,gender, birth, description, matchClass, userPassion] = row

                const users = await UsersFactory.createMany(
                    names.split(','),
                    gender,
                    new Date(birth),
                    description,
                    matchClass,
                    userPassion,
                );

                const persons = await PersonFactory.createMany(
                    emails,
                    role,
                    "examplePass*123",
                );

                usersDummy.push(...users);
                personDummy.push(...persons);
                console.log("person dummy",personDummy)

                console.log('Successfully processed row from CSV.');
            } catch (error) {
                console.error('Error processing CSV row:', error);
            }
        });
    });

    const hashPass = await hash('examplePass*123');
    const createManyPersonData = await Promise.all(
        personDummy.map(async (person) => {
            const createdPerson = await postgres.person.upsert({
                where: { email: person.email },
                update: {},
                create: {
                    email: person.email,
                    password: hashPass,
                    role: person.role,
                    activatedAt: new Date(),
                },
            });

            persons.push(createdPerson);

            return createdPerson;
        }),
    );
    await Promise.all(createManyPersonData);

    const createManyUsersData = usersDummy.map((user, index) =>
        mongo.user.upsert({
            where: { id: persons[index].id },
            update: {},
            create: {
                id: persons[index].id,
                name: user.name,
                photoProfile: user.photoProfile,
                gender: user.gender,
                birth:  user.birth,
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
        }),
    );

    await Promise.all(createManyUsersData);
}
