import { BadRequestException, Injectable } from '@nestjs/common';
import {
    MatchStatus,
    Passion,
} from '../../../../prisma/mongo/generated/client';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { RedisService } from 'src/common/database/redis/redis.service';
import { UserMatch } from './models/match.model';
import { NotificationService } from 'src/notification/services/notification.service';
import { RedisKeyFactory } from '../../../common/database/redis/factory/key.factory';

@Injectable()
export class MatchService {
    constructor(
        private mongoService: MongoService,
        private redisService: RedisService,
        private notificationService: NotificationService,
    ) {}

    async userRequestMatch(
        senderId: string,
        receiverId: string,
        liked?: boolean,
    ) {
        if (senderId === receiverId) {
            throw new BadRequestException('Cannot match with yourself');
        }

        const sender = await this.mongoService.user.findUnique({
            where: {
                id: senderId,
            },
            select: {
                gender: true,
            },
        });

        const receiver = await this.mongoService.user.findUnique({
            where: {
                id: receiverId,
            },
            select: {
                gender: true,
            },
        });

        if (!sender || !receiver) {
            throw new BadRequestException('Sender or receiver not found');
        }

        if (sender.gender === receiver.gender) {
            throw new BadRequestException(
                'Sender and receiver have the same gender',
            );
        }

        const matchId = `${senderId}-${receiverId}`;
        const userMatchIgnoredOrRejected =
            await this.mongoService.userMatch.findFirst({
                where: {
                    status: {
                        in: [MatchStatus.ignored, MatchStatus.rejected],
                    },
                    OR: [
                        { senderId: senderId, receiverId: receiverId },
                        { senderId: receiverId, receiverId: senderId },
                    ],
                },
            });

        if (userMatchIgnoredOrRejected) {
            const match = await this.mongoService.userMatch.update({
                where: {
                    id: matchId,
                    receiverId: receiverId,
                    status: { in: [MatchStatus.ignored, MatchStatus.rejected] },
                },
                data: { status: 'pending', updatedAt: new Date() },
            });
            this.getDataUserMatchNotRecommendation(senderId, receiverId);

            return match;
        } else {
            console.log('userMatch', userMatchIgnoredOrRejected);
            if (userMatchIgnoredOrRejected != null) {
                if (
                    userMatchIgnoredOrRejected.status == MatchStatus.accepted ||
                    userMatchIgnoredOrRejected.status == MatchStatus.pending
                ) {
                    throw new BadRequestException(
                        'User already has matched data',
                    );
                }
            }

            const match = await this.mongoService.userMatch.create({
                data: {
                    id: matchId,
                    sender: {
                        connect: {
                            id: senderId,
                        },
                    },
                    receiver: {
                        connect: {
                            id: receiverId,
                        },
                    },
                    liked: liked || false,
                    status: MatchStatus.pending,
                },
            });
            this.getDataUserMatchNotRecommendation(senderId, receiverId);
            return match;
        }
    }

    async findAllMatchesByUserId(userId: string, acceptedOnly?: boolean) {
        const whereClause: any = {
            OR: [{ senderId: userId }, { receiverId: userId }],
        };
        if (acceptedOnly) {
            whereClause.status = MatchStatus.accepted;
        }

        const userMatches = await this.mongoService.userMatch.findMany({
            where: whereClause,
            select: {
                id: true,
                createdAt: true,
                liked: true,
                status: true,
                updatedAt: true,
                sender: {
                    select: {
                        id: true,
                        name: true,
                        birth: true,
                        photoProfile: {
                            select: {
                                path: true,
                            },
                        },
                    },
                },
                receiver: {
                    select: {
                        id: true,
                        name: true,
                        birth: true,
                        photoProfile: {
                            select: {
                                path: true,
                            },
                        },
                    },
                },
            },
        });

        return userMatches.map((match) => {
            if (match.sender.photoProfile) {
                match.sender.photoProfile.path = `${process.env.S3_BUCKET_URL}/${match.sender.photoProfile.path}`;
            }
            if (match.receiver.photoProfile) {
                match.receiver.photoProfile.path = `${process.env.S3_BUCKET_URL}/${match.receiver.photoProfile.path}`;
            }
            return match;
        });
    }

    async unmatchWithUser(currentUser: string, targetUser: string) {
        try {
            const matchesToDelete = await this.mongoService.userMatch.findFirst(
                {
                    where: {
                        OR: [
                            {
                                senderId: currentUser,
                                receiverId: targetUser,
                            },
                            {
                                senderId: targetUser,
                                receiverId: currentUser,
                            },
                        ],
                        status: MatchStatus.accepted,
                    },
                },
            );

            const unmatch = await this.mongoService.userMatch.deleteMany({
                where: {
                    OR: [
                        {
                            senderId: currentUser,
                            receiverId: targetUser,
                        },
                        {
                            senderId: targetUser,
                            receiverId: currentUser,
                        },
                    ],
                    status: MatchStatus.accepted,
                },
            });

            this.delUserMatchNotRecommendation(
                matchesToDelete.receiverId,
                'sender',
            );
            this.delUserMatchNotRecommendation(
                matchesToDelete.senderId,
                'receiver',
            );

            if (unmatch.count === 0) {
                throw new Error('Unmatch Failed');
            }

            const targetPath = `/matches/${matchesToDelete.id}`;
            this.notificationService.sendNotificationToUser(
                targetUser,
                'match',
                {
                    notification: {
                        title: 'Unmatch Success',
                        body: `You have successfully unmatched. They will no longer be able to see you or message you`,
                    },
                    webpush: {
                        fcmOptions: {
                            link: targetPath,
                        },
                    },
                },
                targetPath,
            );

            return { message: 'Unmatched successfully' };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async updateMatchStatus(
        userId: string,
        idMatch: string,
        state: MatchStatus,
    ): Promise<UserMatch | null> {
        try {
            const updateUserMatch = await this.mongoService.userMatch.update({
                where: { id: idMatch, receiverId: userId, status: 'pending' },
                data: { status: state },
            });

            if (state == 'accepted') {
                this.getDataUserMatchNotRecommendation(
                    updateUserMatch.senderId,
                    userId,
                );
            } else if (state == 'ignored' || state == 'rejected') {
                this.delUserMatchNotRecommendation(userId, 'sender');
                this.delUserMatchNotRecommendation(
                    updateUserMatch.senderId,
                    'receiver',
                );
            }

            const targetPath = `/matches/${idMatch}`;
            this.notificationService.sendNotificationToUser(
                userId,
                'match',
                {
                    notification: {
                        title: 'Update Match Success',
                        body: `The status of your match has been updated to ${state}`,
                    },
                    webpush: {
                        fcmOptions: {
                            link: targetPath,
                        },
                    },
                },
                targetPath,
            );

            return updateUserMatch;
        } catch (error) {
            throw new BadRequestException('update state failed');
        }
    }

    async checkAcceptedkUserMatch(matchId: string, userId: string) {
        const userMatch = await this.mongoService.userMatch.findFirst({
            where: {
                id: matchId,
                status: MatchStatus.accepted,
                OR: [{ senderId: userId }, { receiverId: userId }],
            },
        });

        if (!userMatch) {
            throw new Error('User not authorized');
        }
        return userMatch;
    }

    async calculateUserMatchClass(passions: Passion[]) {
        try {
            const data = {
                passions: passions.map((passion) => passion.name),
            };
            console.log(data);
            const response = await fetch(
                `${process.env.MATCH_ENGINE_URL}/predict`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                },
            );
            const result = await response.json();
            return result.class_name;
        } catch (error) {
            throw new BadRequestException('Classifier error');
        }
    }

    async getUserMatchRecommendation(
        userId: string,
        limit: number = 20,
        offset: number = 0,
    ) {
        console.log(`limit: ${limit}, offset: ${offset}`);
        try {
            const user = await this.mongoService.user.findUnique({
                where: {
                    id: userId,
                },
                select: {
                    matchClass: true,
                    gender: true,
                    passions: true,
                },
            });

            if (!user) {
                throw new BadRequestException('User not found');
            } else if (!user.matchClass) {
                throw new BadRequestException('User not classified');
            } else if (!user.passions) {
                throw new BadRequestException('User not have passions');
            }

            const senderIdsString = await this.getUserMatchNotRecommendation(
                userId,
                'sender',
            );
            const receiverIdsString = await this.getUserMatchNotRecommendation(
                userId,
                'receiver',
            );

            const recommendations = await this.mongoService.user.findMany({
                where: {
                    matchClass: {
                        equals: user.matchClass,
                    },
                    gender: {
                        not: user.gender,
                    },
                    id: {
                        notIn: receiverIdsString.concat(senderIdsString),
                    },
                },
                skip: offset || 0,
                take: limit || 20,
            });
            return recommendations;
        } catch (error) {
            throw new BadRequestException(
                'Recommendation error:',
                error.message,
            );
        }
    }

    async getMatchById(matchId: string) {
        try {
            const match = await this.mongoService.userMatch.findUnique({
                where: {
                    id: matchId,
                },
            });

            if (!match) {
                throw new BadRequestException('Match not found');
            }

            return match;
        } catch (error) {
            throw new BadRequestException('Match not found');
        }
    }

    async setUserMatchNotRecommendation(
        userId: string,
        type: string,
        value: string[],
    ) {
        const key = RedisKeyFactory.userMatchNotRecommendation(userId, type);
        const keyExists = await this.redisService.redisClient.exists(key);

        if (keyExists) {
            await this.redisService.redisClient.del(key);
        }

        return await this.redisService.redisClient.sadd(key, value);
    }

    async getUserMatchNotRecommendation(userId: string, type: string) {
        const key = RedisKeyFactory.userMatchNotRecommendation(userId, type);
        const userMatchNotRecommendation =
            await this.redisService.redisClient.smembers(key);

        if (
            !userMatchNotRecommendation ||
            userMatchNotRecommendation.length === 0
        ) {
            return [];
        }

        return userMatchNotRecommendation;
    }

    async delUserMatchNotRecommendation(userId: string, type: string) {
        const key = RedisKeyFactory.userMatchNotRecommendation(userId, type);
        const keyExists = await this.redisService.redisClient.exists(key);

        if (keyExists) {
            await this.redisService.redisClient.del(key);
        }
    }

    async getDataUserMatchNotRecommendation(
        senderId: string,
        receiverId: string,
    ) {
        const matchSender = await this.mongoService.userMatch.findMany({
            where: {
                senderId: senderId,
            },
            select: {
                receiverId: true,
            },
        });
        const matchReceiver = await this.mongoService.userMatch.findMany({
            where: {
                receiverId: receiverId,
            },
            select: {
                senderId: true,
            },
        });

        const receiverIds = matchSender.map((match) => match.receiverId);
        const senderIds = matchReceiver.map((match) => match.senderId);

        if (receiverIds.length > 0) {
            this.setUserMatchNotRecommendation(
                senderId,
                'receiver',
                receiverIds,
            );
        }

        if (senderIds.length > 0) {
            this.setUserMatchNotRecommendation(receiverId, 'sender', senderIds);
        }
    }

    async findMatch(userId: string, matchId: string) {
        const match = this.mongoService.userMatch.findUnique({
            where: {
                id: matchId,
                OR: [{ senderId: userId }, { receiverId: userId }],
            },
            select: {
                id: true,
                liked: true,
                status: true,
                sender: {
                    select: {
                        id: true,
                        name: true,
                        birth: true,
                        photoProfile: true,
                        description: true,
                        passions: true,
                    },
                },
                receiver: {
                    select: {
                        id: true,
                        name: true,
                        birth: true,
                        photoProfile: true,
                        description: true,
                        passions: true,
                    },
                },
            },
        });
        if (!match) {
            throw new BadRequestException('Match not found');
        }
        return match;
    }
}
