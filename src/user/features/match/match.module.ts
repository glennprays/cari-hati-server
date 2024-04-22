import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
    providers: [MatchService],
    imports: [DatabaseModule, NotificationModule],
    exports: [MatchService],
    controllers: [MatchController],
})
export class MatchModule {}
