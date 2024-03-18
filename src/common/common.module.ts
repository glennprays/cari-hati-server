import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { S3Module } from './s3/s3.module';
import { FirebaseModule } from './firebase/firebase.module';
import { MailModule } from './mail/mail.module';
import { XenditModule } from './xendit/xendit.module';

@Module({
    imports: [DatabaseModule, S3Module, FirebaseModule, MailModule, XenditModule],
})
export class CommonModule {}
