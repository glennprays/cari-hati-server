import {
    DeleteObjectCommand,
    ListBucketsCommand,
    PutObjectCommand,
    S3Client,
} from '@aws-sdk/client-s3';
import {
    Inject,
    Injectable,
    NotAcceptableException,
    OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class S3Service implements OnModuleInit {
    private bucketName = process.env.S3_BUCKET;
    constructor(@Inject('S3_CLIENT') private s3Client: S3Client) {}

    async onModuleInit() {
        const data = await this.s3Client.send(new ListBucketsCommand({}));
        const bucketStatus = data.Buckets.find(
            (value) => value.Name === this.bucketName,
        );

        if (!bucketStatus) {
            throw new Error('Bucket is not exist');
        }
        console.log();
        console.log('Connection to S3...');
    }

    async uploadAObject(key: string, body: Express.Multer.File) {
        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: key,
            Body: body.buffer,
        });
        try {
            const response = await this.s3Client.send(command);
            return response;
        } catch (error) {
            throw new NotAcceptableException(error);
        }
    }

    async deleteAObject(key: string) {
        const command = new DeleteObjectCommand({
            Bucket: this.bucketName,
            Key: key,
        });
        try {
            const response = await this.s3Client.send(command);
            return response;
        } catch (error) {
            throw new NotAcceptableException(error);
        }
    }
}
