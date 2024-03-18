import { Injectable } from '@nestjs/common';
import { PostgresService } from 'src/common/database/postgres/postgres.service';
import { Person } from '../models/person.model';
import { PersonRole } from 'prisma/postgres/generated/client';
import { hash } from 'argon2';

@Injectable()
export class PersonService {
    constructor(private postgres: PostgresService) {}

    async findOneByEmail(email: string): Promise<Person | null> {
        return this.postgres.person.findUnique({ where: { email: email } });
    }

    async inputPerson(email: string, password: string): Promise<Person | null> {
        return await this.postgres.person.create({
            data:{
                email: email,
                password: await hash(password),
                role: PersonRole.user,
                activatedAt: null
            }
        })
    }
}
