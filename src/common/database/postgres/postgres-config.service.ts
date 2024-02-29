import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: process.env.PG_DB_HOST,
            port: parseInt(process.env.PG_DB_PORT, 10) || 5432,
            username: process.env.PG_DB_USER,
            password: process.env.PG_DB_PASSWORD,
            database: process.env.PG_DB_DATABASE,
            entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
            synchronize: process.env.NODE_ENV === 'development',
        };
    }
}
