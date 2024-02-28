import { Module } from '@nestjs/common';
import { MatchModule } from './features/match/match.module';
import { PhotoGalleryModule } from './features/photo-gallery/photo-gallery.module';
import { BlockModule } from './features/block/block.module';

@Module({
    imports: [MatchModule, PhotoGalleryModule, BlockModule],
})
export class UserModule {}
