import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.allowedOrigin,
      credentials: true
    }
  });
  app.use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('Otzo API')
    .setDescription('The Otzo API description')
    .setVersion('0.9')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes( new ValidationPipe());
  await app.listen(4000);
}
bootstrap();