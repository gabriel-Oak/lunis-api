import { Module } from '@nestjs/common';
import { NewsService } from './news.service';

@Module({
  controllers: [],
  providers: [NewsService],
})
export class NewsModule {}
