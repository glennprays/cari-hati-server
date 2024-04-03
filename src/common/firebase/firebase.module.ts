import { Module } from '@nestjs/common';
import { FcmService } from './fcm/fcm.service';
import { ServiceAccount, credential } from 'firebase-admin';
import * as admin from 'firebase-admin';

const adminConfig: ServiceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

@Module({
    providers: [
        {
            provide: 'FIREBASE_ADMIN',
            useFactory: () => {
                return admin.initializeApp({
                    credential: credential.cert(adminConfig),
                });
            },
        },
        FcmService,
    ],
    exports: ['FIREBASE_ADMIN', FcmService],
})
export class FirebaseModule {}
