import { Module } from '@nestjs/common';
import { MatchModule } from './features/match/match.module';
import { PhotoGalleryModule } from './features/photo-gallery/photo-gallery.module';

@Module({
    imports: [MatchModule, PhotoGalleryModule],
})
export class UserModule {}
