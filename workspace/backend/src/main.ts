import { Logger } from '@anhgerel/logger';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger('main'),
  });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.enableCors({
    origin: '*.anhgerel.ml',
  });

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
