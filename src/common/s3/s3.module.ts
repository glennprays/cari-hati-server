import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { S3Client } from '@aws-sdk/client-s3';

@Module({
    providers: [{
        provide: 'S3_CLIENT',
        useFactory: () => {
            return new S3Client
        }
    }, S3Service],
    exports: [S3Service],
})
export class S3Module {}
