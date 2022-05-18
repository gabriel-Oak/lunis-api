import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Intention } from 'src/models/mongodb/Intention';
import { Repository } from 'typeorm';

@Injectable()
export class PingService {
  constructor(
    @InjectRepository(Intention)
    private intentionRepository: Repository<Intention>,
  ) {}

  ping(): string {
    return `Hi, I'm online bro: ${new Date().toISOString()}`;
  }

  findAll(): Promise<Intention[]> {
    return this.intentionRepository.find();
  }
}
