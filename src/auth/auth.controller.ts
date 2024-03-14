import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthDto } from './dtos/auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/localAuth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // @UseGuards(AuthGuard('local'))
    @Post('signin')
    async signIn(@Body() data: AuthDto) {
        return await this.authService.signIn(data);
    }
}
