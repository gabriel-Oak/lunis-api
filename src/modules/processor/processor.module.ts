import { Module } from '@nestjs/common';
import { DialogueService } from '../dialogue/dialogue.service';
import { NewsService } from '../news/news.service';
import { ProcessorController } from './processor.controller';
import { ProcessorService } from './processor.service';

@Module({
  controllers: [ProcessorController],
  providers: [ProcessorService, DialogueService, NewsService],
})
export class ProcessorModule {}
