import {
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import * as Sentry from '@sentry/node';

@Catch()
export class ExceptionsFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    if (
      !exception.status ||
      exception.status === HttpStatus.INTERNAL_SERVER_ERROR
    ) {
      Sentry.captureException(exception);
    }

    super.catch(
      new HttpException(
        {
          messages: [
            exception.response ||
              exception.message ||
              'Desculpe, mas eu não sei o quê fazer, ainda.',
          ],
        },
        exception.status || HttpStatus.INTERNAL_SERVER_ERROR,
      ),
      host,
    );
  }
}
