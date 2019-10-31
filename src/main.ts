import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const publicPath = join(__dirname, '../uploads');
  app.useStaticAssets(publicPath);

  await app.listen(11045);
}
bootstrap();
