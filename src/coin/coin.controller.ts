import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CoinService } from './services/coin.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { SimulatePaymentDTO, TopupRequestDTO } from './dtos/payment.dto';
import { plainToInstance } from 'class-transformer';
import { WebhookResponse } from 'src/common/xendit/xendit-client';

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

    @Post('callback')
    async callback(@Request() req, @Body() data: WebhookResponse) {
        const response = await this.coinService.updateTransactionStatus(
            req.headers['x-callback-token'],
            req.headers['webhook-id'],
            data,
        );
        return response;
    }

    @UseGuards(JwtGuard)
    @Post('topup/simulate')
    async simulatePayment(@Request() req, @Body() data: SimulatePaymentDTO) {
        data = plainToInstance(SimulatePaymentDTO, data);
        return await this.coinService.simulateTransaction(
            data,
            req.user.sub.id,
        );
    }
}
