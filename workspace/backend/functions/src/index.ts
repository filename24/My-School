import * as functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import express, { type Express } from 'express';
import { Logger } from "@anhgerel/utils"
import { VersioningType } from '@nestjs/common';
import 'dotenv/config'

const server = express();
const logger = new Logger('main')
const Region = 'asia-east2';

const createNestServer = async (expressInstance: Express) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI
  })
  app.enableCors({
    origin: '*'
  })
  return app.init();
};

createNestServer(server)
  .then((v) => logger.info("Nest server enabled for firebase functions"))
  .catch((err) => logger.fatal(err.message));

export const mySchool = functions.region(Region).https.onRequest(server);
