import {
    User as UserModel,
    Gender as GenderEnum,
    UserPassion as UserPassionModel,
    UserPhotoProfile as UserPhotoProfileModel,
} from '../../../prisma/mongo/generated/client';

export type Gender = GenderEnum;

export class UserPassion implements UserPassionModel {
    name: string;
    createdAt: Date;
    deletedAt: Date;
}

export class UserPhotoProfile implements UserPhotoProfileModel {
    path: string;
    updatedAt: Date;
}

export class User implements UserModel {
    refreshTokens: string[];
    id: string;
    name: string;
    gender: Gender;
    birth: Date;
    description: string;
    coinAmount: number;
    createdAt: Date;
    updatedAt: Date;
    userGalleryId: string;
    photoProfile: UserPhotoProfile;
    passions: UserPassion[];
}
