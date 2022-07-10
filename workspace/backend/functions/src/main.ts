import { Logger } from '@anhgerel/utils';
import { createNestServer } from '@utils/serverGen.utils';
import express from 'express';
import { AppModule } from './app.module';

const server = express();
const logger = new Logger('main: dev');

const bootstrap = async () => {
  const app = await createNestServer(server, AppModule);

  await app.listen(3000);

  logger.info('Nest server enabled for dev');
  logger.info(`Nest server listening on ${await app.getUrl()}`);
};

bootstrap();
