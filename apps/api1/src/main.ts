import { NestFactory } from '@nestjs/core';
import { Api1Module } from './api1.module';

async function bootstrap() {
  const app = await NestFactory.create(Api1Module);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
