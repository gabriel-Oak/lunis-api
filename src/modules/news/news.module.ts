import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/services/services.module';
import { NewsService } from './news.service';

@Module({
  imports: [ServicesModule],
  providers: [NewsService],
})
export class NewsModule {}
