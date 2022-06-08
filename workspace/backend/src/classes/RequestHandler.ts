import { FastifyInstance, FastifyPluginOptions, FastifyRegister } from 'fastify';

export default class RequestHandler {
  constructor(public readonly execute: RequestFunction) {}
}

type RequestFunction = (fastify: FastifyInstance, options: FastifyPluginOptions, error?: Error | null) => Promise<any>;
