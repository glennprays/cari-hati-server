import { Blocked, MatchStatus } from 'prisma/mongo/generated/client';
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
    target: string;
}

export class UserGetAllMatchDTO {
    accepted_only: boolean;
}

export class UserUpdateStatusMatchDTO {
    id: string;
    state: MatchStatus;
}

export class UserBlockDTO {
    target_id: string;
    ceatedAt: Date;
}

