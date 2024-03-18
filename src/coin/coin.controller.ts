import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CoinService } from './services/coin.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { CoinTransactionDTO } from './dtos/payment.dto';

@Controller('coins')
export class CoinController {
    constructor(private coinService: CoinService) {}

    @UseGuards(JwtGuard)
    @Post('topup')
    async topUpCoin(@Request() req, @Body() data: CoinTransactionDTO) {
        return this.coinService.topupCoin(data.coinAmount, req.user.sub.id);
    }
}
