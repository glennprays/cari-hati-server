import { PersonRole } from '../models/person.model';

export class PersonResponseDTO {
    id: string;
    email: string;
    role: PersonRole;
    createdAt: Date;
    activatedAt: Date;
    updatedAt: Date;
}
