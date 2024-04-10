import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { BaseWsExceptionFilter, WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@Catch(WsException, HttpException)
export class WebsocketExceptionsFilter extends BaseWsExceptionFilter {
    catch(exception: WsException | HttpException, host: ArgumentsHost) {
        const clientSocket = host.switchToWs().getClient<Socket>();
        const data = host.switchToWs().getData();

        const error =
            exception instanceof WsException
                ? exception.getError()
                : exception.getResponse();

        const details =
            error instanceof Object ? { ...error } : { message: error };

        clientSocket.emit('error', {
            id: clientSocket.id,
            rid: data.rid,
            ...details,
        });
    }
}
