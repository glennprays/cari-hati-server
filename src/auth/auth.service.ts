import { BadRequestException, Injectable } from '@nestjs/common';
import { PersonService } from 'src/user/services/person.service';
import { verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { PersonLoginResponseDTO } from 'src/user/dtos/person.dto';
import { PersonTokenPayload } from './models/payload.model';
import { MailService } from 'src/common/mail/mail.service';
import { RedisService } from 'src/common/database/redis/redis.service';

@Injectable()
export class AuthService {
    constructor(
        private personService: PersonService,
        private jwtService: JwtService,
        private mailService: MailService,
        private redisService: RedisService,
    ) {}

    async validatePerson(
        emailInput: string,
        passwordInput: string,
    ): Promise<PersonLoginResponseDTO> {
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

    async login(person: PersonLoginResponseDTO) {
        const payload: PersonTokenPayload = {
            username: person.email,
            sub: {
                role: person.role,
            },
        };

        const accessToken = this.jwtService.sign(payload);
        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: '30d',
            secret: process.env.JWT_REFRESH_TOKEN_SECRET,
        });
        return {
            person: { ...person },
            access_token: accessToken,
            refresh_token: refreshToken,
        };
    }

    async refreshToken(payload: PersonTokenPayload) {
        const accessToken = this.jwtService.sign(payload);
        return { access_token: accessToken };
    }

    async sendVerificationEmail(email: string) {
        // TODO: check if email is already verified
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
            // TODO: update person activation status
            return { message: 'Account activation success' };
        }
    }
}
