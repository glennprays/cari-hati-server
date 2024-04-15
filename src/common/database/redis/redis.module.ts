import { Inject, Logger, Module, OnModuleInit } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisService } from './redis.service';

@Module({
    providers: [
        {
            provide: 'REDIS_CLIENT',
            useFactory: () => {
                return new Redis({
                    host: process.env.RD_HOST || 'localhost',
                    port: parseInt(process.env.RD_PORT) || 6379,
                    password: process.env.RD_PASSWORD || '',
                    tls: {
                        checkServerIdentity: () => undefined,
                    },
                });
            },
        },
        RedisService,
    ],
    exports: ['REDIS_CLIENT', RedisService],
})
export class RedisModule implements OnModuleInit {
    private logger = new Logger('RedisModule');
    constructor(@Inject('REDIS_CLIENT') private redisClient: Redis) {}

    async onModuleInit() {
        const status = await await this.redisClient.echo(
            'Connection to Redis...',
        );
        this.logger.log(status);
        // this.logger.log('No Connection to Redis...');
    }
}
