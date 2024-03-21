import { PersonRole } from '../models/person.model';

export class PersonLoginResponseDTO {
    id: string;
    email: string;
    role: PersonRole;
    createdAt: Date;
    activatedAt: Date;
    updatedAt: Date;
}

export class PersonRegisterDTO {
    email?: string;
    password?: string;
}
