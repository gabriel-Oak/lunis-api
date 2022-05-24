import { Module } from '@nestjs/common';
import { DialogueModule } from './modules/dialogue/dialogue.module';
import { JokesModule } from './modules/jokes/jokes.module';
import { NewsModule } from './modules/news/news.module';
import { PingModule } from './modules/ping/ping.module';
import { ProcessorModule } from './modules/processor/processor.module';
import { mongodbRoot } from './mongodb.config';
import { ServicesModule } from './services/services.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    mongodbRoot,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DialogueModule,
    JokesModule,
    NewsModule,
    PingModule,
    ProcessorModule,
    ServicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
