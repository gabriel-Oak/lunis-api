import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intention } from 'src/models/mongodb/Intention';
import { PingController } from './ping.controller';
import { PingService } from './ping.service';

@Module({
  imports: [TypeOrmModule.forFeature([Intention])],
  controllers: [PingController],
  providers: [PingService],
})
export class PingModule {}
