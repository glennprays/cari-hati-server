import { BadRequestException, Injectable } from '@nestjs/common';
import { PostgresService } from 'src/common/database/postgres/postgres.service';
import { Person } from '../models/person.model';
import { PersonRole } from 'prisma/postgres/generated/client';
import { hash } from 'argon2';
import { PersonDTO } from '../dtos/person.dto';
import { PersonTokenPayload } from 'src/auth/models/payload.model';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { NotificationService } from 'src/notification/services/notification.service';

@Injectable()
export class PersonService {
    constructor(
        private postgres: PostgresService,
        private mongoService: MongoService,
        private notificationService: NotificationService,
    ) {}

    async findOneByEmail(email: string): Promise<Person | null> {
        return this.postgres.person.findUnique({ where: { email: email } });
    }

    async inputPerson(email: string, password: string): Promise<Person | null> {
        try {
            const person = await this.postgres.person.create({
                data: {
                    email: email,
                    password: await hash(password),
                    role: PersonRole.user,
                    activatedAt: null,
                },
            });
            await this.mongoService.user.create({
                data: {
                    id: person.id,
                    passions: {
                        set: [],
                    },
                    userGallery: {
                        create: {
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    },
                },
            });
            return person;
        } catch (error) {
            throw new BadRequestException('Email already exists');
        }
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
        const updateData: PersonDTO & { updatedAt: Date } = {
            updatedAt: new Date(),
        };

        if (email) {
            updateData.email = email;
        }

        if (password) {
            const hashedPassword = await hash(password);
            updateData.password = hashedPassword;
        }

        const updatedPerson = await this.postgres.person.update({
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
        delete person.password;
        return person;
    }

    async resetPassword(email: string, password: string) {
        const person = await this.findOneByEmail(email);
        if (!person) {
            throw new BadRequestException('Email not found');
        }
        await this.updatePerson({ personId: person.id, password: password });
        return password;
    }
}
