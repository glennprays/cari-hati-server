import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { ChatModule } from './chat/chat.module';
import { GiftModule } from './gift/gift.module';
import { NotificationModule } from './notification/notification.module';
import { CoinModule } from './coin/coin.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        UserModule,
        AuthModule,
        CommonModule,
        ChatModule,
        GiftModule,
        NotificationModule,
        CoinModule,
        ConfigModule.forRoot({
            envFilePath:
                process.env.NODE_ENV === 'production' ? '.env' : '.env.dev',
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
