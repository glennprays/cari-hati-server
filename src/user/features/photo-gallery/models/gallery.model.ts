import { UserGallery as UserGalleryModel } from '../../../../../prisma/mongo/generated/client';

export class UserGallery implements UserGalleryModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
