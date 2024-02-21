import { Module } from '@nestjs/common';
import { ChatService } from './core/chat.service';
import { RoomService } from './features/rooms/room.service';
import { NotificationService } from './features/notifications/notification.service';

@Module({
    providers: [ChatService, RoomService, NotificationService],
})
export class ChatModule {}
