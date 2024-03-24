import { parseArgs } from 'node:util';
import { PrismaClient as PostgresClient } from '../../../../prisma/postgres/generated/client';
import { PrismaClient as MongoClient } from '../../../../prisma/mongo/generated/client';
import { dummySeeder } from './dummy.seeder';
import { structuralSeeder } from './structural.seeder';

const postgres = new PostgresClient();
const mongo = new MongoClient();

const options = {
    mode: { type: 'string' as const },
};

async function main() {
    const {
        values: { mode },
    } = parseArgs({ options });

    switch (mode) {
        case 'dummy':
            await dummySeeder(mongo, postgres);
            break;
        case 'structural':
            await structuralSeeder(mongo);
            break;
        default:
            throw new Error('Failed! Invalid mode');
    }
}

main()
    .then(async () => {
        await postgres.$disconnect();
        await mongo.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await postgres.$disconnect();
        await mongo.$disconnect();
        process.exit(1);
    });
