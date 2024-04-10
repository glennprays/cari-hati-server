import {
    Body,
    Controller,
    Get,
    Patch,
    Post,
    Request,
    UseGuards,
    Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh-auth.guard';
import { PersonService } from 'src/user/services/person.service';
import { JwtGuard } from './guards/jwt-auth.guard';
import { PersonDTO } from 'src/user/dtos/person.dto';
import { tokenExtractorFromCookies } from './strategies/jwt-refresh.strategy';
import { plainToInstance } from 'class-transformer';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private personService: PersonService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Get('signin')
    async signIn(
        @Body() data: { fcm_token: string },
        @Request() req,
        @Res({ passthrough: true }) res,
    ) {
        return await this.authService.signIn(req.user, data.fcm_token, res);
    }

    @UseGuards(JwtRefreshGuard)
    @Post('signout')
    async signOut(@Request() req, @Res({ passthrough: true }) res) {
        const refreshToken = tokenExtractorFromCookies(req);
        const userId = req.user.sub.id;
        const response = await this.authService.signOut(userId, refreshToken);
        res.clearCookie('refresh_token');
        return response;
    }

    @UseGuards(JwtRefreshGuard)
    @Post('refresh')
    async refreshToken(@Request() req) {
        await this.authService.validateRefreshToken(
            req.user.sub.id,
            tokenExtractorFromCookies(req),
        );
        return await this.authService.refreshToken(req.user);
    }

    @UseGuards(JwtGuard)
    @Post('account/activate')
    async activateAccount(@Body() codeDto: { code: number }, @Request() req) {
        return await this.authService.activateAccount(
            req.user.username,
            codeDto.code,
        );
    }

    @UseGuards(JwtGuard)
    @Post('account/activate/code')
    async resendVerificationCode(@Request() req) {
        const email = req.user.username;
        return await this.authService.resendVerificationCode(email);
    }

    @Post('register')
    async register(
        @Body() registerPersonDTO: PersonDTO,
        @Res({ passthrough: true }) res,
    ) {
        registerPersonDTO = plainToInstance(PersonDTO, registerPersonDTO);
        return await this.authService.register(registerPersonDTO, res);
    }

    @UseGuards(JwtGuard)
    @Patch('account')
    async updatePerson(@Body() registerPersonDTO: PersonDTO, @Request() req) {
        return await this.authService.updateAccount({
            personId: req.user.sub.id,
            email: registerPersonDTO.email,
            password: registerPersonDTO.password,
        });
    }

    @UseGuards(JwtGuard)
    @Get('account')
    async getProfile(@Request() req) {
        return this.personService.findPersonByEmail(req.user);
    }
}
