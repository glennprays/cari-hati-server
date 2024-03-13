import { Module } from '@nestjs/common';
import { Redis } from 'ioredis';

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
    ],
    exports: ['REDIS_CLIENT'],
})
export class RedisModule {}
