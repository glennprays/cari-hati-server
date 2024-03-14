import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendAccountVerification(email: string, verificationNumber: number) {
        await this.mailerService.sendMail({
            to: email,
            sender: process.env.MAIL_USER,
            subject: 'Account Verification',
            template: './account-verification',
            context: {
                email,
                verificationNumber,
            },
        });
    }
}
