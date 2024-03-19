import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { XenditService } from 'src/common/xendit/xendit.service';

@Injectable()
export class CoinService {
    constructor(private xenditService: XenditService) {}

    async topupCoin(coinAmount: number, userId: string, email: string) {
        // TODO: calculate moneyAmount based on price in database
        const moneyAmount = 100000;
        // TODO: get customerName from database
        // TODO: update transaction in database
        // TODO: get customerName from database

        const referenceId = randomUUID();
        return this.xenditService.createPaymentRequestVirtualAccount({
            moneyAmount: moneyAmount,
            description: `Topup coin for ${coinAmount} coins`,
            referenceId: referenceId,
            customerName: '',
            userId: userId,
            email: email,
            metadata: { coin_amount: coinAmount },
        });
    }
}
