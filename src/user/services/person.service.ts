import { Injectable } from '@nestjs/common';
import { PostgresService } from 'src/common/database/postgres/postgres.service';
import { Person } from '../models/person.model';
import { PersonRole } from 'prisma/postgres/generated/client';
import { hash } from 'argon2';
import { PersonRegisterDTO } from '../dtos/person.dto';
import { PersonTokenPayload } from 'src/auth/models/payload.model';

@Injectable()
export class PersonService {
  
    constructor(
        private postgres: PostgresService
    ) {}

    async findOneByEmail(email: string): Promise<Person | null> {
        return this.postgres.person.findUnique({ where: { email: email } });
    }

    async inputPerson(email: string, password: string): Promise<Person | null> {
        return await this.postgres.person.create({
            data: {
                email: email,
                password: await hash(password),
                role: PersonRole.user,
                activatedAt: null,
            },
        });
    }

    async updatePerson({
        personId,
        email,
        password,
    }: {
        personId: string;
        email?: string;
        password?: string;
    }): Promise<Person | null> {
        const updateData: PersonRegisterDTO & { updatedAt: Date } = {
            updatedAt: new Date(),
        };

        if (email) {
            updateData.email = email;
        }

        if (password) {
            const hashedPassword = await hash(password);
            updateData.password = hashedPassword;
        }

        let updatedPerson = await this.postgres.person.update({
            where: {
                id: personId,
            },
            data: updateData,
        });
        delete updatedPerson.password;
        return updatedPerson;
    }

    async activatePerson(email: string): Promise<Person | null> {
        return await this.postgres.person.update({
            where: { email: email },
            data: { activatedAt: new Date() },
        });
    }

    async findPersonByEmail(data: PersonTokenPayload) {
        const person = await this.findOneByEmail(data.username);
        const { password, ...personWithoutPassword } = person;
        return personWithoutPassword;
    }
}
