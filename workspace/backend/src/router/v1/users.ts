import RequestHandler from '../../classes/RequestHandler';

export default new RequestHandler(async (server, options) => {
  server.get('/', async (request, reply) => {});
});
