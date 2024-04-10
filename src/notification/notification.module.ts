import { Module } from '@nestjs/common';
import { NotificationService } from './services/notification.service';
import { FirebaseModule } from 'src/common/firebase/firebase.module';
import { DatabaseModule } from 'src/common/database/database.module';

@Module({
    providers: [NotificationService],
    exports: [NotificationService],
    imports: [DatabaseModule, FirebaseModule],
})
export class NotificationModule {}
