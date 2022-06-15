import { Logger } from '@anhgerel/utils';
import Collection from '@discordjs/collection';
import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import RequestHandler from './RequestHandler';
import fs from 'fs';
import path from 'path';

class ServerClient {
  public server: FastifyInstance;
  public routers: Collection<string, RequestHandler> = new Collection();
  private logger: Logger;
  public readonly options: ServerClientOptions;

  constructor(options: ServerClientOptions) {
    this.logger = new Logger('ServerClient', {
      dev: options.mode == 'development',
    });
    this.server = fastify(options.fastify);
    this.options = options;
  }

  public start(port: string | number) {
    this.server.listen(port, this.options.mode == 'production' ? '0.0.0.0' : 'localhost', async (err, address) => {
      if (err) return this.logger.fatal(err.message);

      this.logger.info(`Server listening on ${address}`);
    });
  }

  public load(routerPath: string = path.join(__dirname, '../router')) {
    this.logger.debug('Loading routers...');
    const routerFiles = fs.readdirSync(routerPath);

    routerFiles.forEach((file) => {
      try {
        const { default: router } = require(path.join(routerPath, file));

        if (!(router instanceof RequestHandler))
          return this.logger.warn(`Router ${file} is not a valid RequestHandler`);

        this.routers.set(file, router);
        this.logger.debug(`Router ${file} loaded`);
      } catch (err: any) {
        this.logger.error(`Error loading router ${file}.\n` + err.stack);
      }
    });

    this.logger.debug(`Successfully loaded ${this.routers.size} routers.`);

    this.routers.forEach((router, name) => {
      this.server.register(
        async (fastify, options) => {
          await router.execute(fastify, options, this.logger);
        },
        {
          prefix: `/v1/${name}`,
        },
      );
    });
  }
  public register(route: RequestHandler, name: string) {
    if (this.routers.get(name)) return this.logger.error(`Route ${name} already exists`);

    return this.routers.set(name, route);
  }
}

export interface ServerClientOptions {
  fastify?: FastifyServerOptions;
  mode?: 'production' | 'development';
}

export default ServerClient;
