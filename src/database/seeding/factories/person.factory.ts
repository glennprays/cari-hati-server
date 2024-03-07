import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Person, Role } from 'src/user/entities/person.entity';

export default setSeederFactory(Person, async (faker: Faker) => {
    const person = new Person();
    person.email = faker.internet.email();
    person.role = Role.USER;
    person.password = 'examplePassword123';
    person.activatedAt = new Date();
    return person;
});
