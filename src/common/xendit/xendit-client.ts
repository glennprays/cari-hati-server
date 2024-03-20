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

    async createFixVirtualAccountPayment(
        virtualAccountRequest: VirtualAccountRequestParameter,
    ): Promise<VirtualAccountRequestResponse> {
        try {
            const { data } = await this.axios.post(
                '/callback_virtual_accounts',
                virtualAccountRequest,
            );
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export type VirtualAccountRequestParameter = {
    external_id: string;
    bank_code: BankCode;
    name: string;
    is_single_use?: boolean;
    is_closed?: boolean;
    expected_amount?: number;
    expiration_date?: string;
};

export type VirtualAccountRequestResponse = {
    id: string;
    owner_id: string;
    external_id: string;
    account_number: string;
    bank_code: string;
    merchant_code: string;
    name: string;
    is_closed: string;
    expected_amount: number;
    expiration_date: string;
    is_single_use: boolean;
    status: VirtualAccountStatus;
    currency: Currency;
    country: Country;
};

export type BankCode = 'BCA' | 'BNI' | 'BRI' | 'MANDIRI';

export type VirtualAccountStatus = 'PENDING' | 'INACTIVE' | 'ACTIVE';

export type Currency = 'IDR';

export type Country = 'ID';
