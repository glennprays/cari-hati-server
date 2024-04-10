import { Injectable } from '@nestjs/common';
import { PostgresService } from 'src/common/database/postgres/postgres.service';
import { UserService } from 'src/user/services/user.service';

@Injectable()
export class GiftService {
    constructor(
        private postgresService: PostgresService,
        private userService: UserService,
    ) {}
    async getGiftItems() {
        try {
            const giftItems = await this.postgresService.giftItem.findMany();
            return giftItems;
        } catch (error) {
            throw new Error('Error while fetching gift items');
        }
    }

    async getGiftItemById(id: string) {
        try {
            const giftItem = await this.postgresService.giftItem.findUnique({
                where: {
                    id,
                },
            });
            return giftItem;
        } catch (error) {
            throw new Error('Error while fetching gift item');
        }
    }

    async sendGift(senderId: string, receiverId: string, giftId: string) {
        try {
            if (senderId === receiverId) {
                throw new Error('Sender and receiver cannot be the same');
            }
            const giftItem = await this.getGiftItemById(giftId);
            if (!giftId) {
                throw new Error('Gift Item not exist');
            }
            const senderCoins = await this.userService.getUserCoins(senderId);
            if (senderCoins < giftItem.coinAmount) {
                throw new Error('User coins insufficient');
            }
            const giftTransaction =
                await this.postgresService.giftTransaction.create({
                    data: {
                        senderAccountId: senderId,
                        receiverAccountId: receiverId,
                        giftItemId: giftId,
                        coinAmount: giftItem.coinAmount,
                    },
                });
            await this.userService.updateUserCoins(
                senderId,
                -giftItem.coinAmount,
            );
            await this.userService.updateUserCoins(
                receiverId,
                giftItem.coinAmount,
            );
            return giftTransaction;
        } catch (error) {
            throw new Error(error);
        }
    }
}
