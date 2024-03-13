import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../../prisma/mongo/generated/client';

@Injectable()
export class MongoService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
        console.log('Connection to Mongo...');
    }

    async enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close();
        });
    }
}
