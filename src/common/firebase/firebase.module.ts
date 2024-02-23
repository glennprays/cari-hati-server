import { Module } from '@nestjs/common';
import { FcmService } from './fcm/fcm.service';
import * as admin from 'firebase-admin';

const serviceAccount = require('./credentials/service-account-file.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

@Module({
    providers: [
        {
            provide: 'FirebaseAdmin',
            useValue: admin,
        },
        FcmService,
    ],
    exports: ['FirebaseAdmin'],
})
export class FirebaseModule {}
