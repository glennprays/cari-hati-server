import { BadRequestException, Injectable } from '@nestjs/common';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { PersonService } from './person.service';
import { PersonTokenPayload } from 'src/auth/models/payload.model';
import { User } from '../models/user.model';
import { Gender } from 'prisma/mongo/generated/client';

@Injectable()
export class UserService {
    constructor(
        private mongoService: MongoService,
        private personService: PersonService,
    ) {}
    async findProfileByEmail(data: PersonTokenPayload) {
        const person = await this.personService.findOneByEmail(data.username);
        const user = await this.mongoService.user.findUnique({
            where: { id: person.id },
        });
        return { person: person, user: user };
    }

    async inputPersonalData(
        data: PersonTokenPayload,
        name: string,
        gender: Gender,
        birth: Date,
        description: string,
    ): Promise<User | null> {
        const person = await this.personService.findOneByEmail(data.username);
        const user = await this.mongoService.user.findUnique({
            where: {
                id: person.id,
            },
        });
        if (user) {
            throw new BadRequestException('User already exist');
        }
        const userGallery = await this.mongoService.userGallery.create({
            data: {
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        return await this.mongoService.user.create({
            data: {
                id: person.id,
                name: name,
                gender: gender,
                birth: birth,
                description: description,
                photoProfile: null,
                userGalleryId: userGallery.id,
            },
        });
    }
}
