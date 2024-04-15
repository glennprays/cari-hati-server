import {
    Injectable,
    Inject,
    OnModuleInit,
    BadGatewayException,
    Logger,
} from '@nestjs/common';
import * as admin from 'firebase-admin';
import {
    Message,
    MulticastMessage,
} from 'firebase-admin/lib/messaging/messaging-api';

@Injectable()
export class FcmService implements OnModuleInit {
    private logger = new Logger('FCMModule');
    constructor(
        @Inject('FIREBASE_ADMIN') private readonly firebaseAdmin: admin.app.App,
    ) {}
    async onModuleInit() {
        try {
            await this.firebaseAdmin
                .firestore()
                .listCollections()
                .then(() => {
                    this.logger.log('Connection to firebase admin...');
                });
        } catch (error) {
            console.error('Firebase connection error:', error);
        }
    }

    async sendMessage(message: Message) {
        try {
            const reponse = await this.firebaseAdmin
                .messaging()
                .send(message)
                .then((res) => {
                    return res;
                })
                .catch((err) => {
                    throw new BadGatewayException(err);
                });
            return reponse;
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    async sendMessageToMultipleDevices(multicashMessage: MulticastMessage) {
        try {
            await this.firebaseAdmin
                .messaging()
                .sendEachForMulticast(multicashMessage);
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }
}
