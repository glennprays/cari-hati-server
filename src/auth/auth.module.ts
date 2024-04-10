import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { MailModule } from 'src/common/mail/mail.module';
import { RedisModule } from 'src/common/database/redis/redis.module';
import { WebsocketExceptionsFilter } from './filters/ws.exception';

@Module({
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        JwtRefreshStrategy,
        WebsocketExceptionsFilter,
    ],
    exports: [AuthService],
    imports: [
        UserModule,
        MailModule,
        RedisModule,
        JwtModule.register({
            secret: process.env.JWT_ACCESS_TOKEN_SECRET,
            signOptions: { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION },
        }),
    ],
})
export class AuthModule {}
