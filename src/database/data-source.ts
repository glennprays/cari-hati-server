import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../../.env' });
import { DataSource } from 'typeorm';

export default new DataSource({
    type: 'postgres',
    host: process.env.PG_DB_HOST,
    port: parseInt(process.env.PG_DB_PORT, 10) || 5432,
    username: process.env.PG_DB_USER,
    password: process.env.PG_DB_PASSWORD,
    database: process.env.PG_DB_DATABASE,
    synchronize: false,
    dropSchema: false,
    logging: false,
    logger: 'file',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations_table',
});
