import { Person, PersonRole } from '../../../src/user/models/person.model';

export class PersonFactory {
    static createPerson(email: string, role: PersonRole, password: string) {
        const person = new Person();
        person.email = email;
        person.role = role;
        person.password = password;
        return person;
    }
}
