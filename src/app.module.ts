import { Module } from '@nestjs/common';
import { PingModule } from './modules/ping/ping.module';
import { ProcessorModule } from './modules/processor/processor.module';
import { mongodbRoot } from './mongodb.config';

@Module({
  imports: [mongodbRoot, PingModule, ProcessorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
