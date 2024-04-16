import { BadRequestException, Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { S3Service } from 'src/common/s3/s3.service';
import { compressAndConvertToJPEG, resizeImage } from 'src/utils/image.util';

@Injectable()
export class PhotoGalleryService {
    constructor(
        private mongoService: MongoService,
        private s3Service: S3Service,
    ) {}

    async getUserGallery(userId: string) {
        try {
            const userGallery = await this.mongoService.userGallery.findFirst({
                where: {
                    user: {
                        id: userId,
                    },
                },
            });
            return userGallery;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async countUserPhotos(userId: string): Promise<number> {
        try {
            const userGallery = await this.getUserGallery(userId);
            return await this.mongoService.photoGallery.count({
                where: {
                    userGalleryId: userGallery.id,
                },
            });
        } catch (error) {
            throw new BadRequestException('Error counting user photos');
        }
    }

    async getUserPhotos(userId: string) {
        try {
            const userGallery = await this.getUserGallery(userId);
            const photos = await this.mongoService.photoGallery.findMany({
                where: {
                    userGalleryId: userGallery.id,
                },
            });

            return photos
                .filter((photo) => photo.deletedAt === null)
                .map((photo) => ({
                    ...photo,
                    path: `${process.env.S3_BUCKET_URL}/${photo.path}`,
                }));
        } catch (error) {
            throw new BadRequestException('Error getting user photos');
        }
    }

    async addPhotoToGallery(userId: string, image: Express.Multer.File) {
        try {
            const userPhotos = await this.countUserPhotos(userId);
            if (userPhotos >= 9) {
                throw new BadRequestException('User gallery full');
            }
            const filename = `${randomUUID()}.jpg`;
            image = await compressAndConvertToJPEG(image, 350);
            image = await resizeImage(image, 720, 1280);
            await this.s3Service.uploadAObject(filename, image);
            const userGallery = await this.getUserGallery(userId);
            const photo = await this.mongoService.photoGallery.create({
                data: {
                    userGallery: {
                        connect: {
                            id: userGallery.id,
                        },
                    },
                    path: filename,
                    createdAt: new Date(),
                },
            });
            photo.path = `${process.env.S3_BUCKET_URL}/${filename}`;
            return photo;
        } catch (error) {
            throw new BadRequestException('Error adding photo to gallery');
        }
    }

    async deletePhotoFromGallery(userId: string, photoId: string) {
        try {
            const userGallery = await this.getUserGallery(userId);
            const deletedPhoto = await this.mongoService.photoGallery.update({
                where: {
                    userGalleryId: userGallery.id,
                    id: photoId,
                },
                data: {
                    deletedAt: new Date(),
                },
            });
            if (!deletedPhoto) {
                throw new BadRequestException('Photo not found');
            }
            return { message: 'Photo deleted' };
        } catch (error) {
            throw new BadRequestException('Error deleting photo from gallery');
        }
    }
}
