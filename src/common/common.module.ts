import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EmailModule } from './email/email.module';
import { S3Module } from './s3/s3.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
    imports: [DatabaseModule, EmailModule, S3Module, FirebaseModule],
})
export class CommonModule {}
