import { Injectable } from '@nestjs/common';
import { PostgresService } from 'src/common/database/postgres/postgres.service';
import { Person } from '../models/person.model';

@Injectable()
export class PersonService {
    constructor(private postgres: PostgresService) {}

    async findOneByEmail(email: string): Promise<Person | null> {
        return this.postgres.person.findUnique({ where: { email: email } });
    }
}
