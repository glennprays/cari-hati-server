import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from 'src/common/database/redis/redis.service';
import { Redis } from 'ioredis';
import { ErrorReply } from 'redis';
import { RedisKeyFactory } from 'src/common/database/redis/factory/key.factory';

@Injectable()
export class RoomService {
    private logger = new Logger('RoomService');
    private client: Redis;

    constructor(private readonly redisService: RedisService) {
        this.client = this.redisService.redisClient;
    }

    async createRoom(roomId: string) {
        // TODO: check if roomId base on exisiting user match
        try {
            const roomKey = RedisKeyFactory.createChatRoomKey(roomId);
            const exists = await this.client.exists(roomKey);
            if (!exists) {
                await this.client.sadd(roomKey, ''); // Create an empty list for the room
                this.logger.log(`Room ${roomKey} created`);
            }
        } catch (error) {
            this.logger.error(
                `Error creating room ${roomId}: ${error.message}`,
            );
            throw new Error('Failed to create room');
        }
    }

    async addUserToRoom(roomId: string, userId: string, clientId: string) {
        // TODO: check if user authorize to join room base on user match
        try {
            const isUserInRoom = await this.client.sismember(roomId, clientId);
            if (isUserInRoom) {
                throw new ErrorReply(
                    `User ${userId} already in room ${roomId}`,
                );
            }
            const roomKey = RedisKeyFactory.createChatRoomKey(roomId);
            const userKey = RedisKeyFactory.createWsUserKey(clientId);
            await this.client.sadd(roomKey, clientId);
            await this.client.set(userKey, userId);
            this.logger.log(`User ${userId} joined room ${roomId}`);
        } catch (error) {
            console.log('heree:', error);
            throw new ErrorReply('User not authorized to join room');
        }
    }

    async removeUserFromRoom(roomId: string, clientId: string) {
        // TODO: check if user authorize to leave room base on user match

        const roomKey = RedisKeyFactory.createChatRoomKey(roomId);
        await this.client.srem(roomKey, clientId);
        this.logger.log(`User ${clientId} left room ${roomId}`);
    }

    async removeUser(clientId: string) {
        try {
            const userKey = RedisKeyFactory.createWsUserKey(clientId);
            const roomKeys = await this.client.keys('Room:*');

            const userRooms = await Promise.all(
                roomKeys.map(async (roomKey) => {
                    const isUserInRoom = await this.client.sismember(
                        roomKey,
                        clientId,
                    );
                    return isUserInRoom ? roomKey : null;
                }),
            );

            for (const roomKey of userRooms.filter(Boolean)) {
                await this.client.srem(roomKey, clientId);
            }

            await this.client.del(userKey);

            this.logger.log(
                `User ${clientId} removed from all rooms and deleted`,
            );
        } catch (error) {
            this.logger.error(
                `Error removing user ${clientId}: ${error.message}`,
            );
            throw new Error('Failed to remove user');
        }
    }

    async getUsersInRoom(roomId: string): Promise<string[]> {
        try {
            const roomKey = RedisKeyFactory.createChatRoomKey(roomId);
            const users = await this.client.smembers(roomKey);

            this.logger.log(`Retrieved users in room ${roomId}: ${users}`);

            return users;
        } catch (error) {
            this.logger.error(
                `Error retrieving users in room ${roomId}: ${error.message}`,
            );
            throw new Error('Failed to retrieve users in room');
        }
    }
}
