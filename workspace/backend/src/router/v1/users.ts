import RequestHandler from '../../classes/RequestHandler';

export default new RequestHandler(async (server, options) => {
  server.get('/', async (req, res) => {
    res.send({
      "code": 201,
      "message": "Hello World"
    })
  });
});
