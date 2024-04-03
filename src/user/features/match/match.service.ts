import { BadRequestException, Injectable } from '@nestjs/common';
import { MatchStatus } from 'prisma/mongo/generated/client';
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
        if (senderId == receiverId) {
            throw new BadRequestException('');
        }
        const userMatch = await this.mongoService.userMatch.findFirst({
            where: {
                senderId: senderId,
                receiverId: receiverId,
                status: {
                    not: MatchStatus.ignored,
                },
            },
        });

        if (userMatch) {
            throw new BadRequestException('User already have matched data');
        }
        return await this.mongoService.userMatch.create({
            data: {
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
        let whereClause: any = {
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

    async updateMatchStatus(userId: string, idMatch: string, state: MatchStatus): Promise<UserMatch | null> {
        try {    
          const updateData: Partial<UserMatch> = { status: state };
    
          const updateUserMatch = await this.mongoService.userMatch.update({
            where: { id: idMatch, senderId: userId, status: "pending"},
            data: updateData,
          });
    
          return updateUserMatch;
        } catch (error) {
            throw new BadRequestException("update state failed");
        }
      }
      
    
    
}
