import ServerClient from './classes/ServerClient';
import path from 'path';
import { Logger } from '@anhgerel/utils';

const logger = new Logger('main');
const client = new ServerClient({
  fastify: {
    requestTimeout: 1000 * 60 * 0.5,
  },
  mode: 'development',
});
const { server } = client;

process.on('unhandledRejection', (err: any) => {
  logger.error(err.stack as string);
});

process.on('uncaughtException', (err) => {
  logger.error(err.stack as string);
});

server.all('/', async (req, res) => {
  res.send({
    message: 'Hello World',
    code: 200,
  });
});

client.load(path.join(__dirname, './router/v1'));
client.start(3000);
