import { Module } from '@nestjs/common';
import { XenditModule } from 'src/common/xendit/xendit.module';
import { XenditService } from 'src/common/xendit/xendit.service';
import { CoinService } from './services/coin.service';
import { CoinController } from './coin.controller';

@Module({
    imports: [XenditModule],
    providers: [XenditService, CoinService],
    controllers: [CoinController],
})
export class CoinModule {}
