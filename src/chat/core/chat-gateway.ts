import {
    Catch,
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
import { RedisKeyFactory } from 'src/common/database/redis/factory/key.factory';

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
    ) {}

    afterInit(@ConnectedSocket() client: Socket) {
        this.logger.log('Socket.io Gateway initialized');
    }

    async handleConnection(@ConnectedSocket() client: Socket, ...args: any[]) {
        this.logger.log(`Client connected: ${client.id}`);
    }

    async handleDisconnect(@ConnectedSocket() client: Socket) {
        await this.roomService.removeUser(client.id);

        this.logger.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('join')
    async handleJoin(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { room: string },
    ) {
        if (data.room) {
            const user = (client.handshake as any).user;
            await this.roomService.createRoom(data.room);
            await this.roomService.addUserToRoom(
                data.room,
                user.username,
                client.id,
            );
            client.join(data.room);
            const users = await this.roomService.getUsersInRoom(data.room);
            this.server.to(data.room).emit('joined', {
                message: 'User joined',
                user: user.username,
                users,
            });
        }
    }

    @SubscribeMessage('message')
    async handleMessage(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { room: string; message: string },
    ) {
        if (data.room) {
            const user = (client.handshake as any).user;
            await this.messageService.addMessage(
                data.room,
                data.message,
                user.username,
            );
            this.server.to(data.room).emit('message', {
                message: data.message,
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
}
