import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { Request } from 'express';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request & { user: unknown }>();

    if (!req.user) {
      throw new InternalServerErrorException(
        'User not found in request (AuthGuard called?)',
      );
    }
    return req.user;
  },
);
