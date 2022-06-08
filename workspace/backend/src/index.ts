import fastify from 'fastify';
import v1 from './router/v1';

const server = fastify({
  logger: true,
});

server.all('/', async (req, res) => {
  res.send({
    message: 'Hello World',
    code: 200,
  });
});

server.register(v1.users);

server.listen('3000', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
