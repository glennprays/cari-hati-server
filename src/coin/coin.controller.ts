import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CoinService } from './services/coin.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { TopupRequestDTO } from './dtos/payment.dto';
import { plainToInstance } from 'class-transformer';

@Controller('coins')
export class CoinController {
    constructor(private coinService: CoinService) {}

    // UNCOMPLETE: this is not complete function, it just use for payment gateway testing
    @UseGuards(JwtGuard)
    @Post('topup')
    async topUpCoin(@Request() req, @Body() data: TopupRequestDTO) {
        data = plainToInstance(TopupRequestDTO, data);

        return this.coinService.topupCoin(data, req.user.sub.id);
    }
}
