import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Intention } from 'src/models/mongodb/Intention';
import { FeatureBase, FeatureResponse } from 'src/types/feature';
import { pickAnswer } from 'src/utils/intentions';
import { Repository } from 'typeorm';
import { CreateDialogueDto } from './dialogue.dtos';
import { dialogueIntents } from './dialogue.intents';

@Injectable()
export class DialogueService extends FeatureBase {
  constructor(
    @InjectRepository(Intention)
    private intentionRepository: Repository<Intention>,
  ) {
    super(dialogueIntents);
  }

  async findAllDialogues(): Promise<Intention[]> {
    return this.intentionRepository.find({
      where: {
        module: 'dialogue',
      },
    });
  }

  async createUpdateDialogue(
    body: CreateDialogueDto,
  ): Promise<FeatureResponse> {
    try {
      // const alreadyExits = await this.intentionRepository.findOne({
      //   where: {name: body.name},
      // });

      let parentIntent;
      if (body.parentIntent)
        parentIntent = await this.intentionRepository.findOne(
          body.parentIntent,
        );

      const intention = new Intention({
        ...body,
        module: 'dialogue',
        parentIntent,
      });

      await this.intentionRepository.save(intention);
      const insertIntention = this.intents.find(
        (i) => i.name === 'insert_intention',
      );
      return {
        messages: [pickAnswer(insertIntention)],
      };
    } catch (error) {
      return {
        messages: [error],
      };
    }
  }
}
