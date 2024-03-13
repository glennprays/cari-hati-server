import { Module } from '@nestjs/common';
import { RedisModule } from './redis/redis.module';
import { PostgresService } from './postgres/postgres.service';
import { MongoService } from './mongo/mongo.service';

@Module({
    imports: [RedisModule],
    exports: [RedisModule, PostgresService, MongoService],
    providers: [PostgresService, MongoService],
})
export class DatabaseModule {}
