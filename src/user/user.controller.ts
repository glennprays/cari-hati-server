import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from './services/user.service';
import { ProfileRequestDto } from './dtos/profile.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('profile')
    async getProfile(@Body() data: ProfileRequestDto) {
        return this.userService.findProfileByEmail(data.email);
    }
}
