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
import { AuthController } from './auth/auth.controller';

@Module({
    imports: [
        UserModule,
        CommonModule,
        ChatModule,
        GiftModule,
        NotificationModule,
        CoinModule,
        AuthModule,
        ConfigModule.forRoot({
            envFilePath: ['.env.local', '.env'],
        }),
    ],
    controllers: [AppController, AuthController],
    providers: [AppService],
})
export class AppModule {}
