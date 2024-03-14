import { Injectable } from '@nestjs/common';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { PersonService } from './person.service';

@Injectable()
export class UserService {
    constructor(private mongoService: MongoService, private personService: PersonService) {
    }
    async findProfileByEmail(email: string) {
        const person = await this.personService.findOneByEmail(email);
        const user = await this.mongoService.user.findUnique({ where: { id: person.id } });
        return {person: person, user: user};
    }
}