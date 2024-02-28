import { Module } from '@nestjs/common';
import { LoginService } from './login/login.service';
import { LogoutService } from './logout/logout.service';
import { EmailVerificationModule } from './email-verification/email-verification.module';
import { PasswordResetService } from './password-reset/password-reset.service';
import { RegistrationService } from './registration/registration.service';

@Module({
    providers: [
        LoginService,
        LogoutService,
        PasswordResetService,
        RegistrationService,
    ],
    imports: [EmailVerificationModule],
})
export class AuthModule {}
