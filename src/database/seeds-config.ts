import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../../.env' });

import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: process.env.PG_DB_HOST,
    port: parseInt(process.env.PG_DB_PORT, 10) || 5432,
    username: process.env.PG_DB_USER,
    password: process.env.PG_DB_PASSWORD,
    database: process.env.PG_DB_DATABASE,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    factories: [__dirname + '/factories/*.factory{.ts,.js}'],
    seeds: [__dirname + '/seeds/*.seed{.ts,.js}'],
};

export const dataSource = new DataSource(options);

// (async () => {
//     const options: DataSourceOptions  = {
//         type: 'postgres',
//         host: process.env.PG_DB_HOST,
//         port: parseInt(process.env.PG_DB_PORT, 10) || 5432,
//         username: process.env.PG_DB_USER,
//         password: process.env.PG_DB_PASSWORD,
//         database: process.env.PG_DB_DATABASE,
//         synchronize: false,
//         entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//     };

//     const dataSource = new DataSource(options);
//     console.log('Initializing data source');
//     await dataSource.initialize();

//     await runSeeders(dataSource, {
//         factories: [__dirname + '/factories/*.factory{.ts,.js}'],
//         seeds: [__dirname + '/seeds/*.seed{.ts,.js}'],
//     });
// })();
