import { NextFunction, Request, Response } from 'express';

export const logging = (_req: Request, res: Response, next: NextFunction) => {
  console.log('Before...');

  const now = Date.now();
  res.on('finish', () => {
    console.log(`After... ${Date.now() - now}ms`);
  });
  next();
};
