import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import mongoConfig from './mongo.config';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: () => ({
                uri: mongoConfig.uri,
            }),
        }),
    ],
})
export class MongoModule implements OnModuleInit {
    async onModuleInit() {
        try {
            // Attempt to establish a connection
            await mongoose.connect(mongoConfig.uri);

            // Log a success message if the connection is successful
            console.log('Connected to MongoDB');
        } catch (error) {
            // Log an error message if the connection fails
            console.error('Error connecting to MongoDB:', error.message);
        }
    }
}
