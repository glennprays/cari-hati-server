import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Person, Role } from "src/user/entities/person.entity";

export default class DummySeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const personRepository = dataSource.getRepository(Person);
        const person = new Person();
        person.email = 'pragib@gmail.com';
        person.role = Role.USER;
        person.password = 'examplePassword123';
        person.activatedAt = new Date();
        
        const personFactory = factoryManager.get(Person);
        await personFactory.save();
        
        await personRepository.insert(person);
    }
}
