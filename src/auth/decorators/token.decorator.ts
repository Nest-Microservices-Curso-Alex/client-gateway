import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { Request } from 'express';

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request & { token?: string }>();

    if (!req.token) {
      throw new InternalServerErrorException(
        'Token not found in request (AuthGuard called?)',
      );
    }
    return req.token;
  },
);
