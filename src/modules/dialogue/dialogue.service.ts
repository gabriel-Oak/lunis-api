import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Intention } from 'src/models/mongodb/Intention';
import { FeatureBase, FeatureResponse } from 'src/types/feature';
import { pickAnswer } from 'src/utils/intentions';
import { Repository } from 'typeorm';
import { CreateDialogueDto } from './dialogue.dtos';
import { dialogueIntents } from './dialogue.intents';

const MODULE_NAME = 'dialogue';

@Injectable()
export class DialogueService extends FeatureBase {
  constructor(
    @InjectRepository(Intention)
    private intentionRepository: Repository<Intention>,
  ) {
    super(dialogueIntents);
    this.fetchCreatedIntents();
  }

  async findAllDialogues(): Promise<Intention[]> {
    return this.intentionRepository.find({
      where: {
        module: MODULE_NAME,
      },
    });
  }

  async fetchCreatedIntents() {
    try {
      const intents = await this.findAllDialogues();
      if (intents.length) this.setIntents([...dialogueIntents, ...intents]);
    } catch (error) {
      console.error(error);
    }
  }

  async createUpdateDialogue(
    body: CreateDialogueDto,
  ): Promise<FeatureResponse> {
    try {
      const existLocal = dialogueIntents.find((i) => i.name === body.name);
      if (existLocal)
        throw new Error(
          'Opa, parece que você está tentando alterar uma fala padrão do sistema. Não posso deixar!',
        );

      let parentIntent;
      if (body.parentIntent)
        parentIntent = await this.intentionRepository.findOne(
          body.parentIntent,
        );

      const alreadyExits = await this.intentionRepository.findOne({
        where: { name: body.name },
      });
      const intention = new Intention({
        ...body,
        module: 'dialogue',
        parentIntent,
        id: alreadyExits?.id,
      });

      await this.intentionRepository.save(intention);
      const insertIntention = this.intents.find(
        (i) => i.name === 'insert_intention',
      );
      this.fetchCreatedIntents();
      return {
        messages: [pickAnswer(insertIntention)],
      };
    } catch (error) {
      throw new HttpException(
        {
          messages: [error.message || error],
        },
        error.message ? 400 : 500,
      );
    }
  }

  async removeDialogue(id: string): Promise<FeatureResponse> {
    try {
      const intent = await this.intentionRepository.findOne(id);
      if (!intent)
        throw new Error(
          'Oops, parece que esse dialogo já não existe em nossa base',
        );

      await this.intentionRepository.remove(intent);
      const removeIntention = this.intents.find(
        (i) => i.name === 'remove_intention',
      );
      this.fetchCreatedIntents();
      return {
        messages: [pickAnswer(removeIntention)],
      };
    } catch (error) {
      throw new HttpException(
        {
          messages: [error.message || error],
        },
        error.message ? 400 : 500,
      );
    }
  }
}
