import { BadRequestException, Injectable } from '@nestjs/common';
import { MatchStatus, Passion } from 'prisma/mongo/generated/client';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { UserMatch } from './models/match.model';

@Injectable()
export class MatchService {
    constructor(private mongoService: MongoService) {}

    async userRequestMatch(
        senderId: string,
        receiverId: string,
        liked?: boolean,
    ) {
        if (senderId === receiverId) {
            throw new BadRequestException('');
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
        const userMatch = await this.mongoService.userMatch.findFirst({
            where: {
                id: matchId,
                status: {
                    not: MatchStatus.ignored,
                },
            },
        });

        if (userMatch) {
            throw new BadRequestException('User already has matched data');
        }

        return await this.mongoService.userMatch.create({
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
    }

    async findAllMatchesByUserId(userId: string, accepted_only?: boolean) {
        const whereClause: any = {
            OR: [{ senderId: userId }, { receiverId: userId }],
        };

        if (accepted_only) {
            whereClause.status = MatchStatus.accepted;
        }

        const userMatches = await this.mongoService.userMatch.findMany({
            where: whereClause,
        });

        return userMatches;
    }

    async unmatchWithUser(currentUser: string, targetUser: string) {
        try {
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

            if (unmatch.count === 0) {
                throw new Error('Unmatch Failed');
            }

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
            const updateData: Partial<UserMatch> = { status: state };

            const updateUserMatch = await this.mongoService.userMatch.update({
                where: { id: idMatch, senderId: userId, status: 'pending' },
                data: updateData,
            });

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
            console.log(result);
            return result;
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

            const recommendations = await this.mongoService.user.findMany({
                where: {
                    matchClass: {
                        equals: user.matchClass,
                    },
                    gender: {
                        not: user.gender,
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
}
