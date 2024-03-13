import { Passion as PassionModel } from '../../../prisma/mongo/generated/client';

export class Passion implements PassionModel {
    id: string;
    name: string;
    createdAt: Date;
}
