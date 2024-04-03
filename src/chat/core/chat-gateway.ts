import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ namespace: 'chats' })
export class ChatGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('sendMessage')
    handleMessage(@MessageBody() data: any) {
        this.server.emit('newMessage', data);
    }
}
