import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class S3Service {
    private s3: AWS.S3;

    constructor() {
        this.s3 = new AWS.S3({
            endpoint: process.env.AWS_ENDPOINT,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            s3ForcePathStyle: true,
        });
    }
}
