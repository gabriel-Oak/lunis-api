import { Module } from '@nestjs/common';
import { DialogueModule } from './modules/dialogue/dialogue.module';
import { NewsModule } from './modules/news/news.module';
import { PingModule } from './modules/ping/ping.module';
import { ProcessorModule } from './modules/processor/processor.module';
import { mongodbRoot } from './mongodb.config';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    mongodbRoot,
    ServicesModule,
    DialogueModule,
    PingModule,
    ProcessorModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
