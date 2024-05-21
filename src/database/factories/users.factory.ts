import { $Enums, UserPassion } from 'prisma/mongo/generated/client';
import { User } from '../../../src/user/models/user.model';

export class UsersFactory {
    static createUser(
        name: string,
        gender: $Enums.Gender,
        birth: Date,
        description: string,
        matchClass: $Enums.MatchClass,
        passions: UserPassion[],
    ) {
        const user = new User();
        user.name = name;
        user.gender = gender;
        user.birth = birth;
        user.description = description;
        user.matchClass = matchClass;
        user.passions = passions;
        return user;
    }
}
