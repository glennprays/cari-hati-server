import { Module } from '@nestjs/common';
import { MatchModule } from './features/match/match.module';
import { PhotoGalleryModule } from './features/photo-gallery/photo-gallery.module';
import { BlockModule } from './features/block/block.module';
import { PersonService } from './services/person.service';
import { DatabaseModule } from 'src/common/database/database.module';

@Module({
    providers: [PersonService],
    exports: [PersonService],
    imports: [MatchModule, PhotoGalleryModule, BlockModule, DatabaseModule],
})
export class UserModule {}
