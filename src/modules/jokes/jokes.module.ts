import { Module } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Module({
  providers: [JokesService],
})
export class JokesModule {}
