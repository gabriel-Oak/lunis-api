import { Module } from '@nestjs/common';
import { DialogueModule } from './modules/dialogue/dialogue.module';
import { JokesModule } from './modules/jokes/jokes.module';
import { NewsModule } from './modules/news/news.module';
import { PingModule } from './modules/ping/ping.module';
import { ProcessorModule } from './modules/processor/processor.module';
import { ServicesModule } from './services/services.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mongoDBConfig } from './mongodb.config';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionsFilter } from './utils/exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(mongoDBConfig),
    DialogueModule,
    JokesModule,
    NewsModule,
    PingModule,
    ProcessorModule,
    ServicesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionsFilter,
    },
  ],
})
export class AppModule {}
