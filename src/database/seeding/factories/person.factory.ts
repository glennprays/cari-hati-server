import { Faker } from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Person, Role } from '../../../user/entities/person.entity';

define(Person, (faker: Faker) => {
    const person = new Person();
    person.email = faker.internet.email();
    person.role = Role.USER;
    person.password = 'examplePassword123';
    person.activatedAt = new Date();
    return person;
})
