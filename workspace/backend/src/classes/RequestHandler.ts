import { Logger } from '@anhgerel/utils';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default class RequestHandler {
  constructor(public readonly execute: RequestFunction) {}
}

type RequestFunction = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  logger: Logger,
  error?: Error | null,
) => Promise<any>;
