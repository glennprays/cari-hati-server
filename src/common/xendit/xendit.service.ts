import { Inject, Injectable } from '@nestjs/common';
import { PaymentFactory } from 'src/coin/factories/payment.factory';
import { PaymentRequest } from 'src/coin/models/payment.model';
import Xendit from 'xendit-node';
import { PaymentRequestParameters } from 'xendit-node/payment_request/models';

@Injectable()
export class XenditService {
    constructor(@Inject('XENDIT_CLIENT') private xenditClient: Xendit) {}
    async createPaymentRequestForCoinTopup(
        moneyAmount: number,
        coinAmount: number,
        referenceId: string,
        customerName: string,
        userId: string,
    ) {
        const paymentRequest: PaymentRequest =
            PaymentFactory.createPaymentRequestCoinVirtualAccount(
                moneyAmount,
                coinAmount,
                referenceId,
                customerName,
            );
        const data: PaymentRequestParameters = {
            // country: 'ID',
            amount: 15000,
            metadata: {
                sku: 'example-sku-1234',
            },
            paymentMethod: {
                reusability: 'ONE_TIME_USE',
                type: 'VIRTUAL_ACCOUNT',
                virtualAccount: {
                    channelProperties: {
                        customerName: 'Ahmad Gunawan',
                        expiresAt: new Date('2023-01-03T17:00:00Z'),
                    },
                    channelCode: 'BCA',
                },
                referenceId: 'example-1234',
            },
            currency: 'IDR',
            referenceId: 'example-ref-1234',
        };
        return this.xenditClient.PaymentRequest.createPaymentRequest({
            // forUserId: userId,
            data: data,
        });
    }
}
