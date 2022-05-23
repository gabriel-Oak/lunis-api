import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intention } from 'src/models/mongodb/Intention';
import { DialogueController } from './dialogue.controller';
import { DialogueService } from './dialogue.service';

@Module({
  imports: [TypeOrmModule.forFeature([Intention])],
  controllers: [DialogueController],
  providers: [DialogueService],
  exports: [DialogueService],
})
export class DialogueModule {}
