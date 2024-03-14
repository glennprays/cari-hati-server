import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UserService } from './services/user.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @UseGuards(JwtGuard)
    @Get('profile')
    async getProfile(@Request() req) {
        return this.userService.findProfileByEmail(req.user);
    }
}
