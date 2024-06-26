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
import { generateHash } from 'src/utils/hash.util';
import { RedisKeyFactory } from 'src/common/database/redis/factory/key.factory';
import { NotificationService } from 'src/notification/services/notification.service';

@Injectable()
export class AuthService {
    constructor(
        private personService: PersonService,
        private userService: UserService,
        private jwtService: JwtService,
        private mailService: MailService,
        private redisService: RedisService,
        private notificationService: NotificationService,
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

            this.notificationService.sendNotificationToUser(
                person.id,
                'anoucement',
                {
                    notification: {
                        title: 'Register Success',
                        body: `Congratulations! You have successfully registered for an cari hati account. Please check your email for verification`,
                    },
                    webpush: {
                        fcmOptions: {
                            link: "",
                        },
                    },
                },
                "",
            );
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
        try {
            const status = await this.redisService.verifyVerificationCode(email, code);
            
            if (status) {
                const user = await this.personService.findOneByEmail(email);
                
                if (!user) {
                    throw new Error('User not found');
                }
    
                this.notificationService.sendNotificationToUser(
                    user.id,
                    'anoucement',
                    {
                        notification: {
                            title: 'Account Activation Success',
                            body: 'Congratulations! Your account has been successfully activated.'
                        },
                        webpush: {
                            fcmOptions: {
                                link: ""
                            }
                        }
                    },
                    "",
                );
                await this.personService.activatePerson(email);
                return { message: 'Account activation success' };
            } else {
                throw new Error('Verification code is invalid');
            }
        } catch (error) {
            throw new Error('Failed to activate account: ' + error.message);
        }
    }
    

    async resendVerificationCode(email: string) {
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
            this.notificationService.sendNotificationToUser(
                person.id,
                'anoucement',
                {
                    notification: {
                        title: 'Resend Account Activation Success',
                        body: 'A new activation code has been sent to your email. Please check your email'
                    },
                    webpush: {
                        fcmOptions: {
                            link: ""
                        }
                    }
                },
                "",
            );
            this.mailService.sendAccountVerification(email, verificationCode);
            return { message: 'New verification code sent' };
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

    async resetPasswordRequest(email: string) {
        const person = await this.personService.findOneByEmail(email);
        if (!person) {
            throw new BadRequestException('Account does not exist');
        }
        const key = RedisKeyFactory.resetPasswordKey(email);
        const isExist = await this.redisService.redisClient.exists(key);
        if (isExist) {
            throw new BadRequestException('Reset url already sent');
        }
        const hash = generateHash();
        const resetUrl = `${process.env.RESET_PASSWORD_URL}/${hash}`;
        const status = await this.redisService.redisClient.set(
            key,
            hash,
            'EX',
            60 * 2,
        );

        if (status) {
            this.notificationService.sendNotificationToUser(
                person.id,
                'anoucement',
                {
                    notification: {
                        title: 'Reset Password Request',
                        body: 'Instructions for resetting your password have been sent to your email. Please check your email'
                    },
                    webpush: {
                        fcmOptions: {
                            link: ""
                        }
                    }
                },
                "",
            );
            this.mailService.sendResetPassword(email, resetUrl);
            return { message: 'Reset url sent' };
        }
    }

    async resetPassword(email: string, hash: string, password: string) {
        const person = await this.personService.findOneByEmail(email);
        if (!person) {
            throw new BadRequestException('Account does not exist');
        }
        const key = RedisKeyFactory.resetPasswordKey(email);
        const existingHash = await this.redisService.redisClient.get(key);
        if (!existingHash) {
            throw new BadRequestException('Reset hash not found');
        }
        if (existingHash !== hash) {
            throw new BadRequestException('Invalid reset url');
        }
        this.notificationService.sendNotificationToUser(
            person.id,
            'anoucement',
            {
                notification: {
                    title: 'Reset Password Success',
                    body: 'Your password has been successfully reset. Please sign in with your new password'
                },
                webpush: {
                    fcmOptions: {
                        link: ""
                    }
                }
            },
            "",
        );
        await this.personService.resetPassword(email, password);
        await this.redisService.redisClient.del(key);
        return { message: 'Password reset success' };
    }
}
