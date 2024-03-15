import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh-auth.guard';
import { EmailDTO } from './dtos/email.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signIn(@Request() req) {
        return await this.authService.login(req.user);
    }

    @UseGuards(JwtRefreshGuard)
    @Post('refresh')
    async refreshToken(@Request() req) {
        return await this.authService.refreshToken(req.user);
    }

    // DEBUG: DELETE THIS. THIS IS JUST A TESTING EMAIL SEND
    @Post('signup')
    async signUp(@Body() emailDto: EmailDTO) {
        return await this.authService.sendVerificationEmail(emailDto.email);
    }

    // FIXME: Get the email from the JWT token authorization header
    @Post('account/activate')
    async activateAccount(@Body() codeDto: { code: number; email: string }) {
        return await this.authService.activateAccount(
            codeDto.email,
            codeDto.code,
        );
    }
}
