import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisKeyFactory } from './factory/key.factory';

@Injectable()
export class RedisService {
    constructor(@Inject('REDIS_CLIENT') public redisClient: Redis) {}

    async setVerificationCode(email: string, code: number) {
        const key = RedisKeyFactory.createVerificationCodeKey(email);
        const keyExists = await this.redisClient.exists(key);
        if (keyExists) {
            throw new BadRequestException('Verification code already sent');
        } else {
            return await this.redisClient.set(key, code, 'EX', 60 * 2);
        }
    }

    async verifyVerificationCode(email: string, code: number) {
        const key = RedisKeyFactory.createVerificationCodeKey(email);
        const verificationCode = await this.redisClient.get(key);
        if (parseInt(verificationCode) !== code) {
            throw new BadRequestException('Invalid verification code');
        }
        await this.redisClient.del(key);
        return true;
    }
}
