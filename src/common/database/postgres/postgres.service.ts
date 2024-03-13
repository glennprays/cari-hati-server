import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../../prisma/postgres/generated/client';

@Injectable()
export class PostgresService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
        console.log('Connection to Postgres...');
    }

    async enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close();
        });
    }
}
