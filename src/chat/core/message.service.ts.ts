import { Injectable, Logger } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisKeyFactory } from 'src/common/database/redis/factory/key.factory';
import { RedisService } from 'src/common/database/redis/redis.service';

@Injectable()
export class MessageService {
    private logger = new Logger('MessageService');
    private client: Redis;

    constructor(private readonly redisService: RedisService) {
        this.client = this.redisService.redisClient;
    }

    async addMessage(roomId: string, message: string, userId: string) {
        try {
            const exists = await this.client.exists(roomId);
            if (!exists) {
                throw new Error(`Room ${roomId} does not exist`);
            }
            const key = RedisKeyFactory.createChatMessageKey(roomId);
            const timestamp = Date.now();
            const messageData = JSON.stringify({ message, userId, timestamp });

            if (!messageData) {
                throw new Error('Invalid message data');
            }

            await this.client.lpush(key, messageData);
            this.logger.log(`Message added to room ${roomId}`);
        } catch (error) {
            this.logger.error(
                `Error adding message to room ${roomId}: ${error.message}`,
            );
            throw new Error('Failed to add message');
        }
    }

    async getMessages(roomId: string, limit: number = 10) {
        const key = RedisKeyFactory.createChatMessageKey(roomId);
        const messages = await this.client.lrange(key, 0, limit - 1);
        return messages.map((message) => JSON.parse(message));
    }
}
