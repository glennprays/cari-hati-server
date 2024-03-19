import { Module } from '@nestjs/common';
import { XenditService } from './xendit.service';
import { XenditClient } from './xendit-client';

@Module({
    providers: [
        XenditService,
        {
            provide: 'XENDIT_CLIENT',
            useFactory: () => {
                return new XenditClient({
                    secretKey: process.env.XENDIT_SECRET_KEY,
                });
            },
        },
    ],
    exports: ['XENDIT_CLIENT', XenditService],
})
export class XenditModule {}
