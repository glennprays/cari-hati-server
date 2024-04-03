import {
    BadRequestException,
    Injectable,
    NotAcceptableException,
    Res,
} from '@nestjs/common';
import { PersonService } from 'src/user/services/person.service';
import { verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { PersonDTO, PersonResponseDTO } from 'src/user/dtos/person.dto';
import { PersonTokenPayload } from './models/payload.model';
import { MailService } from 'src/common/mail/mail.service';
import { RedisService } from 'src/common/database/redis/redis.service';
import { UserService } from 'src/user/services/user.service';

@Injectable()
export class AuthService {
    constructor(
        private personService: PersonService,
        private userService: UserService,
        private jwtService: JwtService,
        private mailService: MailService,
        private redisService: RedisService,
    ) {}

    async validatePerson(
        emailInput: string,
        passwordInput: string,
    ): Promise<PersonResponseDTO> {
        const person = await this.personService.findOneByEmail(emailInput);
        if (!person) {
            throw new BadRequestException('person not found');
        }
        const isMatch: boolean = await verify(person.password, passwordInput);
        if (!isMatch) {
            throw new BadRequestException('Invalid password');
        }
        delete person.password;
        return person;
    }

    async generateTokens(person: PersonResponseDTO) {
        const payload: PersonTokenPayload = {
            username: person.email,
            sub: {
                role: person.role,
                id: person.id,
            },
        };

        const accessToken = this.jwtService.sign(payload);
        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: '30d',
            secret: process.env.JWT_REFRESH_TOKEN_SECRET,
        });
        return {
            access_token: accessToken,
            refresh_token: refreshToken,
        };
    }

    async signIn(
        person: PersonResponseDTO,
        fcmToken: string,
        @Res({ passthrough: true }) res,
    ) {
        const { refresh_token, access_token } =
            await this.generateTokens(person);
        const tokenExpires = new Date(
            new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
        );
        await this.userService.addLoginSession(
            person.id,
            refresh_token,
            tokenExpires,
            fcmToken,
        );
        res.cookie('refresh_token', refresh_token, {
            expires: tokenExpires,
        });
        const response = {
            access_token: access_token,
            person: person,
        };
        return response;
    }

    async register(
        { email, password, fcmToken }: PersonDTO,
        @Res({ passthrough: true }) res,
    ) {
        try {
            const person = await this.personService.inputPerson(
                email,
                password,
            );
            delete person.password;
            const status = await this.sendVerificationEmail(email);
            if (!status) {
                throw new BadRequestException(
                    'Email activation not sent, please login to resend',
                );
            }
            const { refresh_token, access_token } =
                await this.generateTokens(person);

            const tokenExpires = new Date(
                new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
            );
            await this.userService.addLoginSession(
                person.id,
                refresh_token,
                tokenExpires,
                fcmToken,
            );
            res.cookie('refresh_token', refresh_token, {
                expires: tokenExpires,
            });
            return { access_token, person };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async signOut(userId: string, refreshToken: string) {
        await this.userService.removeLoginSession(userId, refreshToken);
        return { message: 'Sign out success' };
    }

    async refreshToken(payload: PersonTokenPayload) {
        const accessToken = this.jwtService.sign(payload);
        return { access_token: accessToken };
    }

    async validateRefreshToken(userId: string, token: string) {
        return await this.userService.findRefreshToken(userId, token);
    }

    async sendVerificationEmail(email: string) {
        const person = await this.personService.findOneByEmail(email);
        if (!person) {
            throw new NotAcceptableException('Account does not exist');
        } else if (person.activatedAt) {
            throw new NotAcceptableException('Account is already activated');
        }
        const verificationCode =
            Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        const status = await this.redisService.setVerificationCode(
            email,
            verificationCode,
        );
        if (status) {
            this.mailService.sendAccountVerification(email, verificationCode);
            return { message: 'Verification code sent' };
        }
    }

    async activateAccount(email: string, code: number) {
        const status = await this.redisService.verifyVerificationCode(
            email,
            code,
        );
        if (status) {
            await this.personService.activatePerson(email);
            return { message: 'Account activation success' };
        }
    }

    async updateAccount({
        personId,
        email,
        password,
    }: {
        personId: string;
        email?: string;
        password?: string;
    }) {
        const person = await this.personService.updatePerson({
            personId: personId,
            email: email,
            password: password,
        });
        if (email) {
            return await this.generateTokens(person);
        }
        return person;
    }
}
