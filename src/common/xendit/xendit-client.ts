import axios, { AxiosInstance } from 'axios';

export class XenditClient {
    private secretKey: string;
    private authToken: string;
    private baseUrl = 'https://api.xendit.co';
    private axios: AxiosInstance;

    constructor(config: { secretKey: string; baseUrl?: string }) {
        this.secretKey = config.secretKey;
        this.authToken = Buffer.from(`${this.secretKey}:`).toString('base64');
        this.baseUrl = config.baseUrl || this.baseUrl;
        this.axios = axios.create({
            baseURL: this.baseUrl,
            headers: { Authorization: `Basic ${this.authToken}` },
        });
    }
    async createVirtualAccountPayment({
        currency,
        amount,
        reference_id,
        customer,
        description,
        customer_name,
        expires_at,
        metadata,
    }: PaymentRequestParameter) {
        try {
            const paymentRequest: PaymentRequest = {
                currency: currency,
                amount: amount,
                reference_id: reference_id,
                customer: customer,
                description: description,
                payment_method: {
                    type: 'VIRTUAL_ACCOUNT',
                    reusability: 'ONE_TIME_USE',
                    virtual_account: {
                        channel_code: 'BCA',
                        channel_properties: {
                            customer_name: customer_name,
                            expires_at: expires_at,
                        },
                    },
                },
                metadata: metadata,
            };
            const { data, status } = await this.axios.post(
                '/callback_virtual_accounts',
                paymentRequest,
            );
            return { data: data, status: status };
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}

export type PaymentRequestParameter = {
    currency: Currency;
    amount: number;
    reference_id: string;
    customer_name: string;
    expires_at: string;
    customer: Customer;
    description: string;
    metadata?: object;
};

export type PaymentRequestStatus =
    | 'REQUIRES_ACTION'
    | 'PENDING'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'AWAITING_CAPTURE';

export type Currency = 'IDR';

export class PaymentRequest {
    currency: Currency;
    amount: number;
    reference_id: string;
    payment_method: PaymentMethod;
    customer: Customer;
    description: string;
    metadata?: object;

    constructor(
        currency: Currency,
        amount: number,
        reference_id: string,
        payment_method: PaymentMethod,
    ) {
        this.currency = currency;
        this.amount = amount;
        this.reference_id = reference_id;
        this.payment_method = payment_method;
    }
}

export type CustomerType = 'INDIVIDUAL';

export class Customer {
    reference_id: string;
    type: CustomerType;
    email: string;
}

export type PaymentMethodType = 'VIRTUAL_ACCOUNT';

export type ReusabilityType = 'ONE_TIME_USE';

export class PaymentMethod {
    type: PaymentMethodType;
    reusability: ReusabilityType;
    virtual_account: VirtualAccount;

    constructor(
        type: PaymentMethodType,
        reusability: ReusabilityType,
        virtual_account: VirtualAccount,
    ) {
        this.type = type;
        this.reusability = reusability;
        this.virtual_account = virtual_account;
    }
}

export type ChannelCode = 'BCA';

export class VirtualAccount {
    channel_code: ChannelCode;
    channel_properties: ChannelProperties;

    constructor(
        channel_code: ChannelCode,
        channel_properties: ChannelProperties,
    ) {
        this.channel_code = channel_code;
        this.channel_properties = channel_properties;
    }
}

export class ChannelProperties {
    customer_name: string;
    expires_at: string;

    constructor(customer_name: string, expires_at: string) {
        this.customer_name = customer_name;
        this.expires_at = expires_at;
    }
}
