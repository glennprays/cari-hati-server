import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { DatabaseModule } from 'src/common/database/database.module';

@Module({
    providers: [MatchService],
    imports: [DatabaseModule],
    exports: [MatchService],
    controllers: [MatchController],
})
export class MatchModule {}
