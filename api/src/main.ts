import {NestFactory} from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import fastifyCookie from "@fastify/cookie";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );

    await app.register(fastifyCookie, {
        secret: process.env.SECRETCOOKIE, // for cookies signature
    });

    app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true}));

    await app.listen(3000, '0.0.0.0');
}

bootstrap();
