import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request Gate: Checking raw request...');

    // Tech Lead Logic: You have access to raw headers/body here
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      console.log('No Auth Header found!');
    }
    next();
  }
}
