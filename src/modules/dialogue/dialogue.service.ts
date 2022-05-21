import { Injectable } from '@nestjs/common';
import { FeatureBase } from 'src/types/feature';
import { dialogueIntents } from './dialogue.intents';

@Injectable()
export class DialogueService extends FeatureBase {
  constructor() {
    super(dialogueIntents);
  }
}
