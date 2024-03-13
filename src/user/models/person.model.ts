import {
    Person as PersonModel,
    PersonRole as PersonRoleEnum,
} from '../../../prisma/postgres/generated/client';

export type PersonRole = PersonRoleEnum;
export class Person implements PersonModel {
    id: string;
    email: string;
    role: PersonRole;
    password: string;
    createdAt: Date;
    activatedAt: Date;
    updatedAt: Date;
}
