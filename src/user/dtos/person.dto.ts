import { PersonRole } from '../models/person.model';
import { Expose } from 'class-transformer';
export class PersonResponseDTO {
    id: string;
    email: string;
    role: PersonRole;
    createdAt: Date;
    activatedAt: Date;
    updatedAt: Date;
}

export class PersonDTO {
    email?: string;
    password?: string;
    @Expose({ name: 'fcm_token' })
    fcmToken?: string;
}
