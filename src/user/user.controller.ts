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
    Query,
    Param,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import {
    UserBlockDTO,
    UserResposeDTO,
    UserUpdateDTO,
} from 'src/user/dtos/user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './services/user.service';
import { Message } from 'firebase-admin/lib/messaging/messaging-api';
import { PassionDTO } from 'src/data/dtos/passion.dto';

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

    @UseGuards(JwtGuard)
    @Get('notifications')
    async getNotifications(@Request() req, @Query() query: any) {
        return this.userService.getUserNotifications(
            req.user.sub.id,
            +query.limit,
            +query.offset,
        );
    }

    @UseGuards(JwtGuard)
    @Put('notifications/:notificationId')
    async updateNotificationReadAt(
        @Request() req,
        @Param('notificationId') notificationId: string,
    ) {
        return this.userService.updateNotificationReadAt(
            req.user.sub.id,
            notificationId,
        );
    }

    @UseGuards(JwtGuard)
    @Get('notifications/unread')
    async getUnreadNotificationCount(@Request() req) {
        return this.userService.getUnreadNotificationCount(req.user.sub.id);
    }

    @UseGuards(JwtGuard)
    @Get('coins')
    async getUserCoins(@Request() req) {
        return this.userService.getUserCoins(req.user.sub.id);
    }

    @UseGuards(JwtGuard)
    @Get('passions')
    async getPassions(@Request() req) {
        return await this.userService.getUserPassions(req.user.sub.id);
    }

    @UseGuards(JwtGuard)
    @Put('passions')
    async updatePassions(@Request() req, @Body() data: PassionDTO[]) {
        return await this.userService.updateUserPassions(req.user.sub.id, data);
    }

    @UseGuards(JwtGuard)
    @Get('gifts')
    async getUserGifts(
        @Request() req,
        @Query('type') type: 'sent' | 'received',
        @Query('limit') limit: number,
        @Query('offset') offset: number,
    ) {
        return await this.userService.getUserGiftTransactions(
            req.user.sub.id,
            type,
            +limit,
            +offset,
        );
    }

    @UseGuards(JwtGuard)
    @Get('coins/transactions')
    async getCoinTransactions(
        @Request() req,
        @Query('type') type: 'topup' | 'withdraw',
        @Query('limit') limit: number,
        @Query('offset') offset: number,
    ) {
        return this.userService.getUserCoinTransactions(
            req.user.sub.id,
            type,
            limit,
            offset,
        );
    }

    @UseGuards(JwtGuard)
    @Get('payments')
    async createPayment(
        @Request() req,
        @Query('bank_account_number') bankAccountNumber: string,
    ) {
        return this.userService.getUserPaymentByBankAccountNumber(
            req.user.sub.id,
            bankAccountNumber,
        );
    }

    // DEBUG: this just for testing firebase messaging
    @Post('notification')
    async testNotificationToUser(@Body() message: Message) {
        return await this.userService.testNotificationToUser(message);
    }

    @UseGuards(JwtGuard)
    @Post('block')
    async userBlock(@Body() data: UserBlockDTO, @Request() req) {
        const user = await this.userService.blockUser(
            req.user.sub.id,
            data.target_id,
        );
        return user;
    }

    @UseGuards(JwtGuard)
    @Get(':userId/gallery')
    async getUserGallery(@Param('userId') userId: string) {
        return this.userService.getUserGallery(userId);
    }

    @UseGuards(JwtGuard)
    @Patch('gallery/photos')
    @UseInterceptors(FileInterceptor('image'))
    async addPhotoToUserGallery(
        @UploadedFile() image: Express.Multer.File,
        @Request() req,
    ) {
        return await this.userService.addPhotoToUserGallery(
            req.user.sub.id,
            image,
        );
    }

    @UseGuards(JwtGuard)
    @Delete('gallery/photos/:photoId')
    async deletePhotoFromUserGallery(
        @Param('photoId') photoId: string,
        @Request() req,
    ) {
        return await this.userService.deletePhotoFromUserGallery(
            req.user.sub.id,
            photoId,
        );
    }
}
