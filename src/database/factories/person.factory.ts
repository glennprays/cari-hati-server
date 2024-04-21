import { Person, PersonRole } from '../../../src/user/models/person.model';

export class PersonFactory {
    static async createMany(emails: string, role: PersonRole, password: string) {
        const persons: Person[] = [];
        
            const person = new Person();
            person.email = emails;
            person.role = role;
            person.password = password;
            persons.push(person);
        
        return persons;
    }
}
