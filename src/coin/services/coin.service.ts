import { BadRequestException, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { VirtualAccountRequestResponse } from 'src/common/xendit/xendit-client';
import { XenditService } from 'src/common/xendit/xendit.service';
import { UserService } from 'src/user/services/user.service';
import { TopupRequestDTO } from '../dtos/payment.dto';

@Injectable()
export class CoinService {
    constructor(
        private xenditService: XenditService,
        private userService: UserService,
    ) {}

    async topupCoin({ bankCode, coinAmount }: TopupRequestDTO, userId: string) {
        // TODO: calculate moneyAmount based on price in database
        const moneyAmount = coinAmount * 100;

        const customer = await this.userService.findOneById(userId);
        const referenceId = `tu-${new Date().toISOString()}-${randomUUID()}`;
        const expirationDate = new Date(
            new Date().getTime() + 2 * 60 * 60 * 1000,
        ).toISOString();

        const payment: VirtualAccountRequestResponse =
            await this.xenditService.createFixVirtualAccountPayment({
                external_id: referenceId,
                bank_code: bankCode,
                name: customer.name,
                expected_amount: moneyAmount,
                expiration_date: expirationDate,
                is_single_use: true,
                is_closed: true,
            });
        if (!payment) {
            throw new BadRequestException('Failed to create payment');
        }

        // TODO: update transaction in database
        
        return {
            id: payment.id,
            account_number: payment.account_number,
            bank_code: payment.bank_code,
            expected_amount: payment.expected_amount,
            expiration_date: payment.expiration_date,
            status: payment.status,
        };
    }
}
