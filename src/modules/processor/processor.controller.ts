import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ProcessCommandDto } from './processor.dtos';
import { ProcessorService } from './processor.service';

@Controller('/processor')
export class ProcessorController {
  constructor(private readonly processorService: ProcessorService) {}

  @Post()
  @HttpCode(200)
  async process(@Body() body: ProcessCommandDto) {
    return await this.processorService.process(body);
  }
}
