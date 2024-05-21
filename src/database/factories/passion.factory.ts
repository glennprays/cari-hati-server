import { Passion } from '../../../src/user/models/passion.model';

export class PassionFactory {
    static createMany(names: string[]) {
        const passions: Passion[] = [];
        for (const name of names) {
            const passion = new Passion();
            passion.name = name;
            passion.createdAt = new Date();
            delete passion.id;
            passions.push(passion);
        }
        return passions;
    }
}
