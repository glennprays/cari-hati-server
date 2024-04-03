import { Module } from '@nestjs/common';
import { MatchModule } from './features/match/match.module';
import { PhotoGalleryModule } from './features/photo-gallery/photo-gallery.module';
import { BlockModule } from './features/block/block.module';
import { PersonService } from './services/person.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';
import { S3Module } from 'src/common/s3/s3.module';
import { RouterModule } from '@nestjs/core';
import { FirebaseModule } from 'src/common/firebase/firebase.module';

@Module({
    providers: [PersonService, UserService],
    exports: [PersonService, UserService],
    imports: [
        MatchModule,
        PhotoGalleryModule,
        BlockModule,
        DatabaseModule,
        S3Module,
        RouterModule.register([
            {
                path: 'users',
                module: UserModule,
                children: [
                    {
                        path: 'matches',
                        module: MatchModule,
                    },
                ],
            },
        ]),
        FirebaseModule,
    ],
    controllers: [UserController],
})
export class UserModule {}
