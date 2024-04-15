import {
    INestApplication,
    Injectable,
    Logger,
    OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '../../../../prisma/postgres/generated/client';

@Injectable()
export class PostgresService extends PrismaClient implements OnModuleInit {
    private logger = new Logger('PostgresModule');
    async onModuleInit() {
        // await this.$connect();
        // this.logger.log('Connection to Postgres...');
        this.logger.log('No Connection to Postgres...');
    }

    async enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close();
        });
    }
}
