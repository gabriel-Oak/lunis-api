import { Injectable } from '@nestjs/common';
import { ProcessCommandDto } from './processor.dtos';
@Injectable()
export class ProcessorService {
  process(body: ProcessCommandDto): string {
    return `TODO: logic to process this beaultiful command: ${body.command}`;
  }
}
