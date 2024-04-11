import {
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { CoinService } from './services/coin.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import {
    SimulatePaymentDTO,
    TopupRequestDTO,
    WithdrawRequestDTO,
} from './dtos/payment.dto';
import { plainToInstance } from 'class-transformer';
import { WebhookResponse } from 'src/common/xendit/xendit-client';

@Controller('coins')
export class CoinController {
    constructor(private coinService: CoinService) {}

    @UseGuards(JwtGuard)
    @Post('topup')
    async topUpCoin(@Request() req, @Body() data: TopupRequestDTO) {
        data = plainToInstance(TopupRequestDTO, data);

        return this.coinService.topupCoin(data, req.user.sub.id);
    }

    @UseGuards(JwtGuard)
    @Post('withdraw')
    async withdrawCoin(@Request() req, @Body() data: WithdrawRequestDTO) {
        data = plainToInstance(WithdrawRequestDTO, data);

        return this.coinService.withdrawCoin(req.user.sub.id, data);
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

    @UseGuards(JwtGuard)
    @Get('packages')
    async getCoinPackages() {
        return await this.coinService.getCoinPackages();
    }
}
