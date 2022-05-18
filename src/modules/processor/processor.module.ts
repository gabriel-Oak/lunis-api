import { Module } from '@nestjs/common';
import { ProcessorController } from './processor.controller';
import { ProcessorService } from './processor.service';

@Module({
  controllers: [ProcessorController],
  providers: [ProcessorService],
})
export class ProcessorModule {}
