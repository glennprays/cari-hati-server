import {
    INestApplication,
    Injectable,
    Logger,
    OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '../../../../prisma/mongo/generated/client';

@Injectable()
export class MongoService extends PrismaClient implements OnModuleInit {
    private logger = new Logger('MongoModule');
    async onModuleInit() {
        await this.$connect();
        this.logger.log('Connection to Mongo...');
    }

    async enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close();
        });
    }
}
