import { Injectable, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FcmService {
    constructor(
        @Inject('FirebaseAdmin') private readonly firebaseAdmin: admin.app.App,
    ) {}
}
