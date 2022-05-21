import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeatureResponse } from 'src/types/feature';
import { CreateDialogueDto } from './dialogue.dtos';
import { DialogueService } from './dialogue.service';

@Controller('/dialogue')
export class DialogueController {
  constructor(private readonly dialogueService: DialogueService) {}

  @Get('')
  async findAllDialogues() {
    return await this.dialogueService.findAllDialogues();
  }

  @Post('/save')
  async process(@Body() body: CreateDialogueDto): Promise<FeatureResponse> {
    return await this.dialogueService.createUpdateDialogue(body);
  }
}
