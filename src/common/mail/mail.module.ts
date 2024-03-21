import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Module({
    providers: [MailService],
    exports: [MailService],
    imports: [
        MailerModule.forRootAsync({
            useFactory: async () => ({
                transport: {
                    service: process.env.MAIL_SERVICE,
                    host: process.env.MAIL_HOST,
                    secure: false,
                    port: parseInt(process.env.MAIL_PORT),
                    auth: {
                        user: process.env.MAIL_USER,
                        pass: process.env.MAIL_PASS,
                    },
                },
                template: {
                    dir: join(__dirname, 'templates'),
                    adapter: new HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        }),
    ],
})
export class MailModule {}
