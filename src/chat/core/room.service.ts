import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from 'src/common/database/redis/redis.service';
import { Redis } from 'ioredis';
import { ErrorReply } from 'redis';
import { RedisKeyFactory } from 'src/common/database/redis/factory/key.factory';
import { MatchService } from 'src/user/features/match/match.service';

@Injectable()
export class RoomService {
    private logger = new Logger('RoomService');
    private client: Redis;

    constructor(
        private readonly redisService: RedisService,
        private readonly matchService: MatchService,
    ) {
        this.client = this.redisService.redisClient;
    }

    async createRoom(roomId: string, userId: string) {
        try {
            await this.matchService.checkAcceptedkUserMatch(roomId, userId);
            const roomKey = RedisKeyFactory.chatRoomKey(roomId);
            const exists = await this.client.exists(roomKey);
            if (!exists) {
                await this.client.sadd(roomKey, '');
                this.logger.log(`Room ${roomKey} created`);
            }
        } catch (error) {
            this.logger.error(
                `Error creating room ${roomId}: ${error.message}`,
            );
            throw new Error(`Failed to create room: ${error.message}`);
        }
    }

    async addUserToRoom(roomId: string, userId: string, clientId: string) {
        try {
            await this.matchService.checkAcceptedkUserMatch(roomId, userId);
            const isUserInRoom = await this.client.sismember(roomId, clientId);
            if (isUserInRoom) {
                throw new ErrorReply(
                    `User ${userId} already in room ${roomId}`,
                );
            }
            const roomKey = RedisKeyFactory.chatRoomKey(roomId);
            const userKey = RedisKeyFactory.wsUserKey(clientId);
            await this.client.sadd(roomKey, clientId);
            await this.client.set(userKey, userId);
            this.logger.log(`User ${userId} joined room ${roomId}`);
        } catch (error) {
            console.log('heree:', error);
            throw new ErrorReply('User not authorized to join room');
        }
    }

    async removeUserFromRoom(roomId: string, clientId: string) {
        try {
            const roomKey = RedisKeyFactory.chatRoomKey(roomId);

            const status = await this.client.srem(roomKey, clientId);
            this.logger.debug(
                `Removed ${clientId} from ${roomKey} status: ${status}`,
            );
            this.logger.log(`User ${clientId} left room ${roomId}`);
        } catch (error) {
            this.logger.error(
                `Error removing user ${clientId} from room ${roomId}: ${error.message}`,
            );
            throw new Error('Failed to remove user from room');
        }
    }

    async removeUserFromAllRooms(clientId: string) {
        try {
            const userKey = RedisKeyFactory.wsUserKey(clientId);
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
            const rooms = userRooms.filter(Boolean);
            for (const roomKey of rooms) {
                await this.client.srem(roomKey, clientId);
            }

            await this.client.del(userKey);

            this.logger.log(
                `User ${clientId} removed from all rooms and deleted`,
            );

            return rooms.map((room) => RedisKeyFactory.decodeChatRoomKey(room));
        } catch (error) {
            this.logger.error(
                `Error removing user ${clientId}: ${error.message}`,
            );
            throw new Error('Failed to remove user');
        }
    }

    async getUsersInRoom(roomId: string) {
        try {
            const roomKey = RedisKeyFactory.chatRoomKey(roomId);
            const client = await this.client.smembers(roomKey);
            const users = [];
            for (const clientId of client) {
                const key = RedisKeyFactory.wsUserKey(clientId);
                const user = await this.client.get(key);
                if (user) {
                    users.push(user);
                } else {
                    await this.removeUserFromAllRooms(clientId);
                }
            }
            return users;
        } catch (error) {
            this.logger.error(
                `Error retrieving users in room ${roomId}: ${error.message}`,
            );
            throw new Error('Failed to retrieve users in room');
        }
    }

    async isClientInRoom(roomId: string, clientId: string) {
        try {
            const roomKey = RedisKeyFactory.chatRoomKey(roomId);
            const isUserInRoom = await this.client.sismember(roomKey, clientId);
            return isUserInRoom;
        } catch (error) {
            this.logger.error(
                `Error checking if user ${clientId} in room ${roomId}: ${error.message}`,
            );
            throw new Error('Failed to check user in room');
        }
    }
}
