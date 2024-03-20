import { BadRequestException, Inject, Injectable } from '@nestjs/common';
// import { PaymentFactory } from 'src/coin/factories/payment.factory';
// import { PaymentRequest } from 'src/coin/models/payment.model';
import { VirtualAccountRequestParameter, XenditClient } from './xendit-client';

@Injectable()
export class XenditService {
    constructor(@Inject('XENDIT_CLIENT') private xenditClient: XenditClient) {}

    async createFixVirtualAccountPayment(
        virtualAccountRequest: VirtualAccountRequestParameter,
    ) {
        
        return await this.xenditClient.createFixVirtualAccountPayment(virtualAccountRequest);
    }
}
