import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    providers: [AuthService, LocalStrategy],
    exports: [AuthService],
    imports: [UserModule, JwtModule.register({
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
        signOptions: { expiresIn: '3d' },
    })],
})
export class AuthModule {}
