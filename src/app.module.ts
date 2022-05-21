import { Module } from '@nestjs/common';
import { DialogueModule } from './modules/dialogue/dialogue.module';
import { NewsModule } from './modules/news/news.module';
import { PingModule } from './modules/ping/ping.module';
import { ProcessorModule } from './modules/processor/processor.module';
import { mongodbRoot } from './mongodb.config';

@Module({
  imports: [
    mongodbRoot,
    DialogueModule,
    PingModule,
    ProcessorModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
