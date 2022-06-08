import { Injectable } from '@nestjs/common';

@Injectable()
export class PingService {
  ping(): string {
    return `Hi, I'm online bro: ${new Date().toISOString()}!`;
  }
}
