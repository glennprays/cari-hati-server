import { Gender } from '../models/user.model';
import { UserPhotoProfile } from '../models/user.model';
import { UserPassion } from '../models/user.model';

export class UserResposeDTO {
    id: string;
    name: string;
    gender: Gender;
    birth: Date;
    description: string;
    cointAmount: Date;
    ceatedAt: Date;
    updatedAt: Date;
    userGalleryId: string;
    photoProfile: UserPhotoProfile;
    passions: UserPassion[];
}

export class UserUpdateDTO {
    name?: string;
    gender?: Gender;
    birth?: Date;
    description?: string;
}

export class UserRequestMatchDTO {
    receiverId: string;
    liked?: boolean;
}

export class UserUnmatchMatchDTO {
    receiverId: string;
}

export class UserGetAllMatchDTO {
    accepted_only : boolean;
}

