import { IsNumber, IsPositive } from 'class-validator';
import { Expose } from 'class-transformer';
import { BankCode } from 'src/common/xendit/xendit-client';

export class TopupRequestDTO {
    @Expose({ name: 'bank_code' })
    bankCode: BankCode;

    @Expose({ name: 'coin_package_id' })
    coinPackageId: string;
}

export class WithdrawRequestDTO {
    @Expose({ name: 'bank_code' })
    bankCode: BankCode;

    @Expose({ name: 'bank_account_number' })
    bankAccountNumber: string;

    @Expose({ name: 'coin_amount' })
    @IsNumber()
    @IsPositive()
    coinAmount: number;
}

export class SimulatePaymentDTO {
    @Expose({ name: 'money_amount' })
    @IsNumber()
    @IsPositive()
    moneyAmount: number;

    @Expose({ name: 'bank_code' })
    bankCode: BankCode;

    @Expose({ name: 'bank_account_number' })
    bankAccountNumber: string;
}
