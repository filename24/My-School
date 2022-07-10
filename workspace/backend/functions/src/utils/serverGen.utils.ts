import { Logger } from '@anhgerel/utils';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { type Express } from 'express';

export const createNestServer = async (expressInstance: Express, AppModule) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
    {
      logger: new Logger('main'),
    },
  );

  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  app.enableCors({
    origin: '*',
  });

  app.useGlobalPipes(new ValidationPipe());
  return app.init();
};
