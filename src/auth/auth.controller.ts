import {
    BadRequestException,
    Body,
    Controller,
    Patch,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh-auth.guard';
import { PersonService } from 'src/user/services/person.service';
import { JwtGuard } from './guards/jwt-auth.guard';
import { PersonResponseDTO, PersonRegisterDTO } from 'src/user/dtos/person.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private personService: PersonService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signIn(@Request() req) {
        return await this.authService.generateToken(req.user);
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
        return await this.authService.generateToken(person);
    }

    @UseGuards(JwtGuard)
    @Patch('account')
    async updatePerson(
        @Body() registerPersonDTO: PersonRegisterDTO,
        @Request() req,
    ) {
        return await this.authService.updatePersonData({
            personId: req.user.sub.id,
            email: registerPersonDTO.email,
            password: registerPersonDTO.password,
        });
    }
}