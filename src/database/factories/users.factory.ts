import { $Enums } from 'prisma/mongo/generated/client';
import { User } from '../../../src/user/models/user.model';

export class UsersFactory {
    static async createMany(names: string, gender: $Enums.Gender, birth: Date, description:string, matchClass: $Enums.MatchClass, userPassion: { name: string;}) {
        const users: User[] = [];
        for (const name of names) {
            const user = new User();
            user.name = name;
            user.gender = gender;
            user.birth = birth;
            user.description = description;
            user.matchClass = matchClass;
            user.passions = userPassion[name];
            users.push(user);
        }
        return users;
    }
}
