import { Controller, Get, Query } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    constructor(private dataService: DataService) {}

    @Get('passions')
    async getPassions(@Query() query) {
        return await this.dataService.getAllPassions(
            +query.limit,
            +query.offset,
        );
    }
}
