import { ResponseData, StatusCode } from '@types';
import rateLimit from 'express-rate-limit';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { WebhookClient } from 'discord.js';
import Webhook from '@utils/Webhook';

const BaseLimiter = rateLimit({
  windowMs: 60 * 1000 * 10,
  max: 500,
  standardHeaders: true,
  handler: (req, res, next) => {
    res
      .status(StatusCode.TooManyRequests)
      .json({ data: 'Rate Limited! ', code: StatusCode.TooManyRequests });
  },
});

const Ping = async (req: NextApiRequest, _res: NextApiResponse, next: Function) => {
  const pingStart = Date.now();
  await next();
  const pingEnd = Date.now();
  const ping = pingEnd - pingStart;

  req.headers.latency = String(ping + 'ms');
};
const RequestHandler = nc<NextApiRequest, NextApiResponse<ResponseData>>({
  onError(err: Error, req, res) {
    res
      .status(StatusCode.InternalServerError)
      .json({ data: 'Internal Server Error', code: StatusCode.InternalServerError });
    new Webhook(err.stack);
  },
})
  .use(BaseLimiter)
  .use(Ping);

export default RequestHandler;
