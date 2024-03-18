import { Injectable } from '@nestjs/common';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { PersonService } from './person.service';
import { PersonTokenPayload } from 'src/auth/models/payload.model';
import { PostgresService } from 'src/common/database/postgres/postgres.service';

@Injectable()
export class UserService {
    constructor(
        private mongoService: MongoService,
        private personService: PersonService
    ) {}
    async findProfileByEmail(data: PersonTokenPayload) {
        const person = await this.personService.findOneByEmail(data.username);
        const user = await this.mongoService.user.findUnique({
            where: { id: person.id },
        });
        return { person: person, user: user };
    }


}
