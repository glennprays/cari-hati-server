import { IsNumber, IsPositive } from 'class-validator';
import { Expose } from 'class-transformer';

export class CoinTransactionDTO {
    @Expose({ name: 'coin_amount' })
    @IsNumber()
    @IsPositive()
    coinAmount: number;
}
