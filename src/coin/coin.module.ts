import { Module } from '@nestjs/common';
import { XenditModule } from 'src/common/xendit/xendit.module';
import { XenditService } from 'src/common/xendit/xendit.service';
import { CoinService } from './services/coin.service';
import { CoinController } from './coin.controller';
import { UserModule } from 'src/user/user.module';
import { DatabaseModule } from 'src/common/database/database.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MailModule } from 'src/common/mail/mail.module';

@Module({
    imports: [
        XenditModule,
        UserModule,
        DatabaseModule,
        ScheduleModule.forRoot(),
        MailModule,
    ],
    providers: [XenditService, CoinService],
    controllers: [CoinController],
})
export class CoinModule {}
