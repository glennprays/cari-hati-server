import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: `mongodb://${configService.get('MONGO_USERNAME')}:${encodeURIComponent(configService.get('MONGO_PASSWORD'))}@${configService.get('MONGO_HOST')}:${configService.get('MONGO_PORT')}/${configService.get('MONGO_DATABASE')}`,
                authSource: 'admin',
            }),
            inject: [ConfigService],
        }),
    ],
})
export class MongoModule {}
