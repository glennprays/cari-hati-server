import { Injectable } from '@nestjs/common';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { PassionDTO } from './dtos/passion.dto';

@Injectable()
export class DataService {
    constructor(private mongoService: MongoService) {}

    async getAllPassions(limit?: number, offset?: number) {
        try {
            const queryProps = {};
            if (limit) queryProps['take'] = limit;
            if (offset) queryProps['skip'] = offset;
            const passions =
                await this.mongoService.passion.findMany(queryProps);
            return passions;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getPassionsByIds(data: PassionDTO[]) {
        try {
            const passions = await this.mongoService.passion.findMany({
                where: { id: { in: data.map((val) => val.id) } },
            });
            if (!passions) {
                throw new Error('Passions not found');
            }
            return passions;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getPassionById(id: string) {
        try {
            const passion = await this.mongoService.passion.findUnique({
                where: { id: id },
            });
            if (!passion) {
                throw new Error('Passion not found');
            }
            return passion;
        } catch (error) {
            throw new Error(error);
        }
    }
}
