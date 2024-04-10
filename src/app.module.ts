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
import { DataModule } from './data/data.module';
import { PassionService } from './user/service/passion.service';

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
        DataModule,
    ],
    controllers: [AppController, AuthController],
    providers: [AppService, PassionService],
})
export class AppModule {}
