import { Module } from '@nestjs/common';
import { TopupModule } from './transaction/topup/topup.module';
import { WithdrawModule } from './transaction/withdraw/withdraw.module';

@Module({
  imports: [TopupModule, WithdrawModule]
})
export class CoinModule {}
