import { Body, Controller, Post } from '@nestjs/common';
import { ProcessCommandDto } from './processor.dtos';
import { ProcessorService } from './processor.service';

@Controller('/processor')
export class ProcessorController {
  constructor(private readonly processorService: ProcessorService) {}

  @Post()
  process(@Body() body: ProcessCommandDto): string {
    return this.processorService.process(body);
  }
}
