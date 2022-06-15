import RequestHandler from '../../classes/RequestHandler';

export default new RequestHandler('v1/users', async (server, options) => {
  server.get('/@me', async (req, res) => {});

  server.get('/:id', async (req, res) => {});

  server.post('/:id/', async (req, res) => {});
});
