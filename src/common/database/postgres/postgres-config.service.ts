import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions  } from '@nestjs/typeorm';

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: process.env.PG_DB_HOST || 'localhost',
            port: parseInt(process.env.PG_DB_PORT, 10) || 5432,
            username: process.env.POSTGRES_USER || 'postgres',
            password: process.env.POSTGRES_PASSWORD || 'example',
            database: process.env.PG_DB_DATABASE || 'cari_hati',
            entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
            synchronize: process.env.NODE_ENV !== 'production',
        };
    }
}
