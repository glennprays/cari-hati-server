import {
    PaymentMethodParameters,
    PaymentMethodReusability,
    PaymentMethodType,
    PaymentRequestCurrency,
    PaymentRequestParameters,
    VirtualAccountParameters as VAParam,
    VirtualAccountChannelCode,
    VirtualAccountChannelProperties as VAChannelProps,
} from 'xendit-node/payment_request/models';

export class PaymentRequest implements PaymentRequestParameters {
    country: string;
    amount: number;
    currency: PaymentRequestCurrency;
    metadata: object;
    paymentMethod: PaymentMethodVirtualAccount;
    referenceId: string;
}

class PaymentMethodVirtualAccount implements PaymentMethodParameters {
    type: PaymentMethodType;
    reusability: PaymentMethodReusability;
    description: string;
    referenceId: string;
    virtualAccount: VirtualAccountParameters;
}

class VirtualAccountParameters implements VAParam {
    channelCode: VirtualAccountChannelCode;
    channelProperties: VirtualAccountChannelProperties;
}

class VirtualAccountChannelProperties implements VAChannelProps {
    customerName: string;
    expiresAt: Date;
}
