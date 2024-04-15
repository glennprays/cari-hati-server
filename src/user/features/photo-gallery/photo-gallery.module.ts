import { Module } from '@nestjs/common';
import { PhotoGalleryService } from './photo-gallery.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { S3Module } from 'src/common/s3/s3.module';

@Module({
    providers: [PhotoGalleryService],
    imports: [DatabaseModule, S3Module],
    exports: [PhotoGalleryService],
})
export class PhotoGalleryModule {}
