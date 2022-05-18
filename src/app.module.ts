import { Module } from '@nestjs/common';
import { PingModule } from './modules/ping/ping.module';
import { mongodbRoot } from './mongodb.config';

@Module({
  imports: [PingModule, mongodbRoot],
  controllers: [],
  providers: [],
})
export class AppModule {}
