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
import { UserService } from './services/user.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import {
    UserRequestMatchDTO,
    UserResposeDTO,
    UserUpdateDTO,
} from 'src/user/dtos/user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
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

    @UseGuards(JwtGuard)
    @Post('matches')
    async requestMatch(
        @Body() userRequestMatchDTO: UserRequestMatchDTO,
        @Request() req,
    ) {
        return await this.userService.userRequestMatch(
            req.user.sub.id,
            userRequestMatchDTO.receiverId,
            userRequestMatchDTO.liked,
        );
    }
}
