import {
    BadRequestException,
    Body,
    Controller,
    Patch,
    Post,
    Request,
    UseGuards,
    Res,
    Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh-auth.guard';
import { PersonService } from 'src/user/services/person.service';
import { JwtGuard } from './guards/jwt-auth.guard';
import { PersonRegisterDTO } from 'src/user/dtos/person.dto';
import { tokenExtractorFromCookies } from './strategies/jwt-refresh.strategy';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private personService: PersonService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Get('signin')
    async signIn(@Request() req, @Res({ passthrough: true }) res) {
        return await this.authService.signIn(req.user, res);
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

    @Post('register')
    async register(@Body() registerPersonDTO: PersonRegisterDTO) {
        const person = await this.personService.inputPerson(
            registerPersonDTO.email,
            registerPersonDTO.password,
        );
        const status = await this.authService.sendVerificationEmail(
            registerPersonDTO.email,
        );
        if (!status) {
            throw new BadRequestException(
                'Email activation not sent, please login to resend',
            );
        }
        return await this.authService.generateTokens(person);
    }

    @UseGuards(JwtGuard)
    @Patch('account')
    async updatePerson(
        @Body() registerPersonDTO: PersonRegisterDTO,
        @Request() req,
    ) {
        return await this.authService.updateAccount({
            personId: req.user.sub.id,
            email: registerPersonDTO.email,
            password: registerPersonDTO.password,
        });
    }
}
