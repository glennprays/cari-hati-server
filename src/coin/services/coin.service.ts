import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { XenditService } from 'src/common/xendit/xendit.service';

@Injectable()
export class CoinService {
    constructor(private xenditService: XenditService) {}

    async topupCoin(
        coinAmount: number,
        userId: string,
    ) {
        // TODO: calculate moneyAmount based on price in database
        const moneyAmount = 100000; 
        // TODO: get customerName from database
        const customerName = 'Pragib';

        // TODO: update transaction in database

        const referenceId = randomUUID();
        return this.xenditService.createPaymentRequestForCoinTopup(
            moneyAmount,
            coinAmount,
            referenceId,
            customerName,
            userId,
        );
    }
}
