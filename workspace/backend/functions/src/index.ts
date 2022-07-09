import * as functions from 'firebase-functions';
import 'dotenv/config'
import express from 'express';
import { AppModule } from './app.module';
import { Logger } from "@anhgerel/utils"
import { createNestServer } from '@utils/serverGen.utils';

const server = express();
const logger = new Logger('main')
const Region = 'asia-east2';

createNestServer(server, AppModule)
  .then((v) => logger.info("Nest server enabled for firebase functions"))
  .catch((err) => logger.fatal(err.message));

export const mySchool = functions.region(Region).https.onRequest(server);
