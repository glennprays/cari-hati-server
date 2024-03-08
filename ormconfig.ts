import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../../.env' });
import 'reflect-metadata';
export default {
    type: 'postgres',
    host: process.env.PG_DB_HOST,
    port: parseInt(process.env.PG_DB_PORT, 10) || 5432,
    username: process.env.PG_DB_USER,
    password: process.env.PG_DB_PASSWORD,
    database: process.env.PG_DB_DATABASE,
    synchronize: false,
    seeds: ['src/database/seeding/seeds/**/*{.ts,.js}'],
    factories: ['src/database/seeding/factories/**/*{.ts,.js}']
};
