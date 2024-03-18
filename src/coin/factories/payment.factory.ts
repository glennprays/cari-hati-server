import { PaymentRequest } from '../models/payment.model';

export class PaymentFactory {
    static createPaymentRequestCoinVirtualAccount(
        moneyAmount: number,
        coinAmount: number,
        referenceId: string,
        customerName: string,
    ) {
        const paymentRequest: PaymentRequest = {
            country: 'ID',
            currency: 'IDR',
            amount: moneyAmount,
            metadata: {
                coinAmount: coinAmount,
            },
            referenceId: referenceId,
            paymentMethod: {
                reusability: 'ONE_TIME_USE',
                type: 'VIRTUAL_ACCOUNT',
                virtualAccount: {
                    channelCode: 'BCA',
                    channelProperties: {
                        customerName: customerName,
                        expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000),
                    },
                },
                referenceId: referenceId,
                description: `Payment for ${coinAmount} coins`,
            },
        };

        return paymentRequest;
    }
}
