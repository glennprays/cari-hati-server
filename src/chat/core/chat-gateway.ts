import {
    Logger,
    UnauthorizedException,
    UseFilters,
    UseGuards,
} from '@nestjs/common';
import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
    ConnectedSocket,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WsJwtGuard } from 'src/auth/guards/jwt-auth-ws.guard';
import { RoomService } from './room.service';
import { WebsocketExceptionsFilter } from 'src/auth/filters/ws.exception';
import { MessageService } from './message.service.ts';
import { Message } from '../models/message.interface';
import { GiftService } from 'src/gift/gift.service';

@WebSocketGateway()
@UseGuards(WsJwtGuard)
@UseFilters(WebsocketExceptionsFilter)
export class ChatGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
    @WebSocketServer()
    server: Server;
    private logger = new Logger('ChatGateway');

    constructor(
        private readonly roomService: RoomService,
        private readonly messageService: MessageService,
        private readonly giftService: GiftService,
    ) {}

    afterInit() {
        this.logger.log('Socket.io Gateway initialized');
    }

    handleConnection(@ConnectedSocket() client: Socket) {
        this.logger.log(`Client connected: ${client.id}`);
    }

    async handleDisconnect(@ConnectedSocket() client: Socket): Promise<void> {
        try {
            const rooms = await this.roomService.removeUserFromAllRooms(
                client.id,
            );
            const user = (client.handshake as any).user;
            for (const room of rooms) {
                const users = await this.roomService.getUsersInRoom(room);
                this.server.to(room).emit('left', {
                    message: 'User left',
                    user: user.username,
                    users,
                });
            }
            this.logger.log(`Client disconnected: ${client.id}`);
        } catch (error) {
            this.logger.error(
                `Error removing user ${client.id} from all connections: ${error.message}`,
            );
        }
    }

    @SubscribeMessage('join')
    async handleJoin(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { room: string },
    ) {
        if (data.room) {
            try {
                const user = (client.handshake as any).user;
                await this.roomService.createRoom(data.room, user.sub.id);
                await this.roomService.addUserToRoom(
                    data.room,
                    user.sub.id,
                    client.id,
                );
                client.join(data.room);
                const users = await this.roomService.getUsersInRoom(data.room);
                this.server.to(data.room).emit('joined', {
                    message: 'User joined',
                    user: user.username,
                    users,
                });
            } catch (error) {
                this.server.to(client.id).emit('error', error.message);
            }
        }
    }

    @SubscribeMessage('message')
    async handleMessage(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { room: string; text: string },
    ) {
        if (data.room) {
            const isClientInRoom = await this.roomService.isClientInRoom(
                data.room,
                client.id,
            );
            if (!isClientInRoom) {
                throw new UnauthorizedException('User not in room');
            }
            const user = (client.handshake as any).user;
            const message = await this.messageService.addMessage(
                data.room,
                { text: data.text } as Message,
                user.sub.id,
            );
            this.server.to(data.room).emit('message', {
                message,
                user: user.username,
            });
        }
    }

    @SubscribeMessage('leave')
    async handleLeave(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { room: string },
    ) {
        if (data.room) {
            const user = (client.handshake as any).user;
            await this.roomService.removeUserFromRoom(data.room, client.id);
            client.leave(data.room);
            const users = await this.roomService.getUsersInRoom(data.room);
            this.server.to(data.room).emit('left', {
                message: 'User left',
                user: user.username,
                users,
            });
        }
    }

    @SubscribeMessage('gift')
    async handleGift(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { room: string; giftId: string },
    ) {
        if (data.room) {
            const isClientInRoom = await this.roomService.isClientInRoom(
                data.room,
                client.id,
            );
            if (!isClientInRoom) {
                throw new UnauthorizedException('User not in room');
            }

            const user = (client.handshake as any).user;

            const giftTransaction = await this.giftService.sendGift(
                user.sub.id,
                data.room,
                data.giftId,
            );

            const message = await this.messageService.addMessage(
                data.room,
                { gift: giftTransaction.giftItem.imagePath } as Message,
                user.sub.id,
            );
            this.server.to(data.room).emit('message', {
                message,
                user: user.username,
            });
        }
    }

    @SubscribeMessage('chatList')
    async handleChatList(@ConnectedSocket() client: Socket) {
        const rooms = await this.roomService.getUserRooms(client.id);
        this.server.to(client.id).emit('chatList', rooms);
    }
}
