import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intention } from 'src/models/mongodb/Intention';
import { DialogueService } from '../dialogue/dialogue.service';
import { NewsService } from '../news/news.service';
import { ProcessorController } from './processor.controller';
import { ProcessorService } from './processor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Intention])],
  controllers: [ProcessorController],
  providers: [ProcessorService, DialogueService, NewsService],
})
export class ProcessorModule {}
