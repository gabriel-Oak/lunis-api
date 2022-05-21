import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  async saveDialogue(@Body() body: CreateDialogueDto) {
    return await this.dialogueService.createUpdateDialogue(body);
  }

  @Delete('/:id')
  async removeDialogue(@Param('id') id: string) {
    return await this.dialogueService.removeDialogue(id);
  }
}
