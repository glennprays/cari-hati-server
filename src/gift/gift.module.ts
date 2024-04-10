import { Module } from '@nestjs/common';
import { GiftService } from './gift.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { GiftController } from './gift.controller';
import { UserModule } from 'src/user/user.module';
import { MatchModule } from 'src/user/features/match/match.module';

@Module({
    providers: [GiftService],
    imports: [DatabaseModule, UserModule, MatchModule],
    controllers: [GiftController],
    exports: [GiftService],
})
export class GiftModule {}
