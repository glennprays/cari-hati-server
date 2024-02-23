import { Module } from '@nestjs/common';
import { FcmService } from './fcm/fcm.service';
import * as admin from 'firebase-admin';

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
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
