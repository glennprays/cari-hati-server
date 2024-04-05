import { Module } from '@nestjs/common';
import { RoomService } from './core/room.service';
import { ChatGateway } from './core/chat-gateway';
import { DatabaseModule } from 'src/common/database/database.module';
import { MessageService } from './core/message.service.ts';

@Module({
    providers: [RoomService, ChatGateway, MessageService],
    imports: [DatabaseModule],
})
export class ChatModule {}
