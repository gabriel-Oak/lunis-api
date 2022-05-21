import { Module } from '@nestjs/common';
import { DialogueService } from './dialogue.service';

@Module({
  controllers: [],
  providers: [DialogueService],
})
export class DialogueModule {}
