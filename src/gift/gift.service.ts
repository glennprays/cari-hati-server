import { Injectable } from '@nestjs/common';
import { PostgresService } from 'src/common/database/postgres/postgres.service';

@Injectable()
export class GiftService {
    constructor(private postgresService: PostgresService) {}
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
}
