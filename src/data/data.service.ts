import { Injectable } from '@nestjs/common';
import { MongoService } from 'src/common/database/mongo/mongo.service';
import { Passion } from '../user/models/passion.model';


@Injectable()
export class DataService {
    constructor(private mongoService: MongoService) {}

    async findMany(page = null, pageSize = null) {
        try {
            interface QueryOptions {
                skip?: number;
                take?: number;
            }
            let queryOptions: QueryOptions = {};
            // Jika page atau pageSize diberikan, gunakan pagination
            if (page !== null && pageSize !== null) {
                const skip = (page - 1) * pageSize;
                queryOptions.skip = skip;
                queryOptions.take = pageSize;
            }
            
            // Menjalankan kueri dengan opsi yang ditentukan
            const passions = await this.mongoService.passion.findMany({
                skip: queryOptions.skip,
                take: queryOptions.take,
            });
            return passions; 
        } catch (error) {
            console.error('Error while finding all passions:', error);
            throw error; 
        }
    }
    


    
    
}
