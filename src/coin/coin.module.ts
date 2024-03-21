import { Module } from '@nestjs/common';
import { XenditModule } from 'src/common/xendit/xendit.module';
import { XenditService } from 'src/common/xendit/xendit.service';
import { CoinService } from './services/coin.service';
import { CoinController } from './coin.controller';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [XenditModule, UserModule],
    providers: [XenditService, CoinService],
    controllers: [CoinController],
})
export class CoinModule {}
