import { Module } from '@nestjs/common';
import { PhotoGalleryService } from './photo-gallery.service';

@Module({
    providers: [PhotoGalleryService],
})
export class PhotoGalleryModule {}
