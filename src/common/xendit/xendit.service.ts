import { Inject, Injectable } from '@nestjs/common';
import { VirtualAccountRequestParameter, XenditClient } from './xendit-client';

@Injectable()
export class XenditService {
    constructor(@Inject('XENDIT_CLIENT') private xenditClient: XenditClient) {}

    async createFixVirtualAccountPayment(
        virtualAccountRequest: VirtualAccountRequestParameter,
    ) {
        return await this.xenditClient.createFixVirtualAccountPayment(
            virtualAccountRequest,
        );
    }

    async simulateFixVirtualAccountPayment(externalId: string, amount: number) {
        return await this.xenditClient.simulateFixVirtualAccountPayment(
            externalId,
            amount,
        );
    }
}
