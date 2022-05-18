import { Controller, Get } from '@nestjs/common';
import { Intention } from 'src/models/mongodb/Intention';
import { PingService } from './ping.service';

@Controller('ping')
export class PingController {
  constructor(private readonly pingService: PingService) {}

  @Get()
  ping(): string {
    return this.pingService.ping();
  }

  @Get('/test')
  async test(): Promise<Intention[]> {
    const int = await this.pingService.findAll();
    console.log('hello test', int);
    return int;
  }
}
