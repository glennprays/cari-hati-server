import { Module } from '@nestjs/common';
import { GiftService } from './gift.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { GiftController } from './gift.controller';

@Module({
    providers: [GiftService],
    imports: [DatabaseModule],
    controllers: [GiftController],
})
export class GiftModule {}
