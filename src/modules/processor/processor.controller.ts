import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { FeatureResponse } from 'src/types/feature';
import { ProcessCommandDto } from './processor.dtos';
import { ProcessorService } from './processor.service';

@Controller('/processor')
export class ProcessorController {
  constructor(private readonly processorService: ProcessorService) {}

  @Post()
  @HttpCode(200)
  async process(@Body() body: ProcessCommandDto): Promise<FeatureResponse> {
    return await this.processorService.process(body);
  }
}
