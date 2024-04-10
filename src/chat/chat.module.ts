import { Module } from '@nestjs/common';
import { RoomService } from './core/room.service';
import { ChatGateway } from './core/chat-gateway';
import { DatabaseModule } from 'src/common/database/database.module';
import { MessageService } from './core/message.service.ts';
import { MatchModule } from 'src/user/features/match/match.module';
import { GiftModule } from 'src/gift/gift.module';

@Module({
    providers: [RoomService, ChatGateway, MessageService],
    imports: [DatabaseModule, MatchModule, GiftModule],
})
export class ChatModule {}
