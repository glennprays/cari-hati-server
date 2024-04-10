import {
    Controller,
    Get,
    Query,
} from '@nestjs/common';
import { DataService } from './data.service';


@Controller('data')
export class DataController {
    constructor(private dataService: DataService) {}

    @Get('passions')
    async getPassions(
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10,
    ) {
        try {
            const passions = await this.dataService.findMany(page,pageSize);
            return passions;
        } catch (error) {
            return { error: 'Passion not get' };
        }
    }
 }
