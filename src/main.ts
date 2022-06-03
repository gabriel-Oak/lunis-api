import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';
import * as Sentry from '@sentry/node';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Sentry.init({
    dsn: 'https://4db959c58707444d8520f3b761110dd5@o490602.ingest.sentry.io/6435063',
  });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.APIT_PORT || 3000);
}
bootstrap();
