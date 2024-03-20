import { IsNumber, IsPositive } from 'class-validator';
import { Expose } from 'class-transformer';
import { BankCode } from 'src/common/xendit/xendit-client';

export class TopupRequestDTO {
    @Expose({ name: 'coin_amount' })
    @IsNumber()
    @IsPositive()
    coinAmount: number;

    @Expose({ name: 'bank_code' })
    bankCode: BankCode;
}
