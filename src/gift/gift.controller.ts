import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
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

    // DEBUG: This method for send test only
    @UseGuards(JwtGuard)
    @Post('send')
    async sendGift(
        @Request() req,
        @Body() data: { receiverId: string; giftId: string },
    ) {
        return this.giftService.sendGift(
            req.user.sub.id,
            data.receiverId,
            data.giftId,
        );
    }
}
