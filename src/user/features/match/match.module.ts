import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { MongoService } from 'src/common/database/mongo/mongo.service';

@Module({
    providers: [MatchService, MongoService],
    exports: [MatchService],
    controllers: [MatchController],
})
export class MatchModule {}
