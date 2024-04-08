import {
    Controller,
    Get,
    UseGuards,
    Request,
    Post,
    Body,
    Patch,
    UseInterceptors,
    UploadedFile,
    Put,
    Delete,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserBlockDTO, UserResposeDTO, UserUpdateDTO } from 'src/user/dtos/user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './services/user.service';
import { Message } from 'firebase-admin/lib/messaging/messaging-api';

@Controller('')
export class UserController {
    constructor(private userService: UserService) {}

    @UseGuards(JwtGuard)
    @Get('profile')
    async getProfile(@Request() req) {
        return this.userService.findOneById(req.user.sub.id);
    }

    @UseGuards(JwtGuard)
    @Post('profile')
    async createProfile(
        @Body() userResposeDTO: UserResposeDTO,
        @Request() req,
    ) {
        const user = await this.userService.inputPersonalData(
            req.user.sub.id,
            userResposeDTO.name,
            userResposeDTO.gender,
            userResposeDTO.birth,
            userResposeDTO.description,
        );
        return user;
    }

    @UseGuards(JwtGuard)
    @Patch('profile')
    async updateUser(@Body() userUpdateDTO: UserUpdateDTO, @Request() req) {
        return await this.userService.updateUser({
            userId: req.user.sub.id,
            name: userUpdateDTO.name,
            gender: userUpdateDTO.gender,
            birth: userUpdateDTO.birth,
            description: userUpdateDTO.description,
        });
    }

    @UseGuards(JwtGuard)
    @Put('profile/photo')
    @UseInterceptors(FileInterceptor('image'))
    async updateUserPhotoProfile(
        @UploadedFile() image: Express.Multer.File,
        @Request() req,
    ) {
        return this.userService.updateUserPhotoProfile(req.user.sub.id, image);
    }

    @UseGuards(JwtGuard)
    @Delete('profile/photo')
    async deleteUserPhotoProfile(@Request() req) {
        return this.userService.deleteUserPhotoProfile(req.user.sub.id);
    }

    // DEBUG: this just for testing firebase messaging
    @Post('notification')
    async sendNotificationToUser(@Body() message: Message) {
        return await this.userService.sendNotificationToUser(message);
    }

    @UseGuards(JwtGuard)
    @Post('block')
    async userBlock(@Body() userResposeDTO: UserBlockDTO, @Request() req) {
        const user = await this.userService.blockUser(
            req.user.sub.id,
            userResposeDTO.target_id,
        );
        return user;
    }
}
