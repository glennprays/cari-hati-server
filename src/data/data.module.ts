import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { DatabaseModule } from 'src/common/database/database.module';


@Module({
  controllers: [DataController],
  imports: [DatabaseModule],
  providers: [DataService],

})
export class DataModule {}
