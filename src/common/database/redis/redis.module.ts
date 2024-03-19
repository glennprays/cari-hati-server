import { Module } from '@nestjs/common';
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
                });
            },
        },
        RedisService,
    ],
    exports: ['REDIS_CLIENT', RedisService],
})
export class RedisModule {}
