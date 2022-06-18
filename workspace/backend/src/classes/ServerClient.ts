import { Logger } from '@anhgerel/utils';
import Collection from '@discordjs/collection';
import Koa from 'koa';
import Router from '@koa/router';
import RequestHandler from './RequestHandler';
import fs from 'fs';
import path from 'path';

class ServerClient {
  public server: Koa;
  public routers: Collection<string, RequestHandler> = new Collection();
  private logger: Logger;
  public readonly options: ServerClientOptions;
  public router: Router;

  constructor(options: ServerClientOptions) {
    this.logger = new Logger('ServerClient', {
      dev: options.mode == 'development',
    });
    this.server = new Koa(options.koa);
    this.router = new Router();
    this.options = options;
  }

  public start(port: string | number) {
    this.server.listen(port);

    this.setupMiddlewares();
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

    this.routers.forEach((router) => {
      this.router.all(router.name, router.execute);
    });
  }

  public register(route: RequestHandler, name: string) {
    if (this.routers.get(name)) return this.logger.error(`Route ${name} already exists`);

    return this.routers.set(name, route);
  }

  private setupMiddlewares() {
    this.server.register(fastifyCors, {
      origin: (origin, callback) => {
        const { hostname } = new URL(origin);

        if (hostname !== 'localhost' && this.options.mode === 'development') {
          return callback(new Error('The server is currently being checked.'), false);
        }
      },
    });

    this.server.register(fastifyCookie);
    this.server.register(fastifyRateLimit, {
      global: true,
      max: 150,
      timeWindow: 1000 * 60 * 5,
    });
  }
}

export interface ServerClientOptions {
  koa?: {
    env?: string | undefined;
    keys?: string[] | undefined;
    proxy?: boolean | undefined;
    subdomainOffset?: number | undefined;
    proxyIpHeader?: string | undefined;
    maxIpsCount?: number | undefined;
  };
  mode?: 'production' | 'development';
}

export default ServerClient;
