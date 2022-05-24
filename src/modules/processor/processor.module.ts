import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intention } from 'src/models/mongodb/Intention';
import { ServicesModule } from 'src/services/services.module';
import { DialogueModule } from '../dialogue/dialogue.module';
import { JokesService } from '../jokes/jokes.service';
import { NewsService } from '../news/news.service';
import { ProcessorController } from './processor.controller';
import { ProcessorService } from './processor.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Intention]),
    DialogueModule,
    ServicesModule,
  ],
  controllers: [ProcessorController],
  providers: [ProcessorService, NewsService, JokesService],
})
export class ProcessorModule {}
