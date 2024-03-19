import { BadRequestException, Inject, Injectable } from '@nestjs/common';
// import { PaymentFactory } from 'src/coin/factories/payment.factory';
// import { PaymentRequest } from 'src/coin/models/payment.model';
import { PaymentRequestParameter, XenditClient } from './xendit-client';

@Injectable()
export class XenditService {
    constructor(@Inject('XENDIT_CLIENT') private xenditClient: XenditClient) {}
    async createPaymentRequestVirtualAccount({
        moneyAmount,
        description,
        referenceId,
        customerName,
        userId,
        email,
        metadata,
    }: {
        moneyAmount: number;
        description: string;
        referenceId: string;
        customerName: string;
        userId: string;
        email: string;
        metadata: object;
    }) {
        try {
            const paymentRequestParameter: PaymentRequestParameter = {
                currency: 'IDR',
                amount: moneyAmount,
                reference_id: referenceId,
                customer: {
                    reference_id: userId,
                    type: 'INDIVIDUAL',
                    email: email,
                },
                description: description,
                customer_name: customerName,
                expires_at: new Date().toISOString(),
                metadata: metadata,
            };
            return await this.xenditClient.createVirtualAccountPayment(
                paymentRequestParameter,
            );
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
