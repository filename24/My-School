import { Middleware } from '@koa/router';
export default class RequestHandler {
  constructor(public readonly name: string, public readonly execute: Middleware) {}
}
