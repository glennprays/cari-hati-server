import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Person, Role } from '../../../user/entities/person.entity';


export default class DummySeeder implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const person = await factory(Person)().createMany(2);
    }
}

// export default class DummySeeder implements Seeder {
//     track = true;
//     public async run(
//         dataSource: DataSource,
//         factoryManager: SeederFactoryManager,
//     ): Promise<any> {
//         const personRepository = dataSource.getRepository(Person);
//         const person = new Person();
//         person.email = 'pragib@gmail.com';
//         person.role = Role.USER;
//         person.password = 'examplePassword123';
//         person.activatedAt = new Date();

//         const personFactory = factoryManager.get(Person);
//         await personFactory.save();

//         await personRepository.insert(person);
//     }
// }
