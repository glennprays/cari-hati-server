import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { S3Client } from '@aws-sdk/client-s3';

@Module({
    providers: [
        {
            provide: 'S3_CLIENT',
            useFactory: () => {
                return new S3Client({
                    region: process.env.S3_REGION,
                    credentials: {
                        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                    },
                    // endpoint: process.env.S3_ENDPOINT,
                });
            },
        },
        S3Service,
    ],
    exports: [S3Service],
})
export class S3Module {}
