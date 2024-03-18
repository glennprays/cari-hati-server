import { Module } from '@nestjs/common';
import { XenditService } from './xendit.service';
import Xendit from 'xendit-node';

@Module({
    providers: [
        XenditService,
        {
            provide: 'XENDIT_CLIENT',
            useFactory: () => {
                return new Xendit({
                    secretKey: process.env.XENDIT_SECRET_KEY,
                });
            },
        },
    ],
    exports: ['XENDIT_CLIENT', XenditService],
})
export class XenditModule {}
