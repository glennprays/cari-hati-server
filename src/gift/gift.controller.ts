import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { GiftService } from './gift.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('gifts')
export class GiftController {
    constructor(private giftService: GiftService) {}

    @UseGuards(JwtGuard)
    @Get()
    async getGiftItems() {
        return this.giftService.getGiftItems();
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    async getGiftItemById(@Param('id') id: string) {
        return this.giftService.getGiftItemById(id);
    }
}
