import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendAccountVerification(email: string, verificationCode: number) {
        await this.mailerService.sendMail({
            to: email,
            sender: process.env.MAIL_USER,
            subject: 'Account Verification',
            template: './account-verification',
            context: {
                email,
                verificationCode,
            },
        });
    }

    async sendResetPassword(email: string, resetUrl: string) {
        await this.mailerService.sendMail({
            to: email,
            sender: process.env.MAIL_USER,
            subject: 'Reset Password',
            template: './reset-password',
            context: {
                email,
                resetUrl,
            },
        });
    }

    async sendTransactionSuccess(
        email: string,
        {
            price,
            transactionFee,
            coinAmount,
            bank,
            virtualAccountNumber,
            date,
        }: {
            price: number;
            transactionFee: number;
            coinAmount: number;
            bank: string;
            virtualAccountNumber: string;
            date: string;
        },
    ) {
        await this.mailerService.sendMail({
            to: email,
            sender: process.env.MAIL_USER,
            subject: 'Transaction Success',
            template: './topup-coin-success',
            context: {
                email,
                price,
                transactionFee,
                coinAmount,
                bank,
                virtualAccountNumber,
                date,
            },
        });
    }
}
