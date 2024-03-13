import { PhotoGallery as PhotoGalleryModel } from '../../../../../prisma/mongo/generated/client';

export class PhotoGallery implements PhotoGalleryModel {
    id: string;
    path: string;
    userGalleryId: string;
    createdAt: Date;
    deletedAt: Date;
}
