import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    });
    app.setGlobalPrefix('api/v1');
    await app.listen(3000);
}
bootstrap();