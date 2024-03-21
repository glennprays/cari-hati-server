import { BadRequestException, Injectable } from '@nestjs/common';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { PersonService } from './person.service';
import { PersonTokenPayload } from 'src/auth/models/payload.model';
import { User } from '../models/user.model';
import { Gender } from 'prisma/mongo/generated/client';
import { UserUpdateDTO } from '../dtos/user.dto';

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

    async updateUser({
        userId,
        name,
        gender,
        birth,
        description,
    }: {
        userId: string;
        name?: string;
        gender?: Gender;
        birth?: Date;
        description?: string;
    }): Promise<User | null> {
        const updateData: UserUpdateDTO & { updatedAt: Date } = {
            updatedAt: new Date(),
        };

        if (name) {
            updateData.name = name;
        }

        if (gender) {
            updateData.gender = gender;
        }

        if (birth) {
            updateData.birth = birth;
        }

        if (description) {
            updateData.description = description;
        }

        let updateUser = await this.mongoService.user.update({
            where: {
                id: userId,
            },
            data: updateData,
        });
        return updateUser;
    }
}
