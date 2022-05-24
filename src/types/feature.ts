/* eslint-disable @typescript-eslint/no-unused-vars */
import { pickAnswer } from 'src/utils/intentions';
import { IntentInterface } from './intent';

export interface FeatureResponse {
  messages: string[];
  path?: string;
}

export class FeatureBase {
  intents: IntentInterface[];

  constructor(intents: IntentInterface[]) {
    this.setIntents(intents);
  }

  public setIntents(intents: IntentInterface[]) {
    this.intents = intents;
  }

  processCommand(
    intent: IntentInterface,
    _speech: string,
  ): FeatureResponse | Promise<FeatureResponse> {
    return {
      messages: [pickAnswer(intent)],
    };
  }

  checkIntent(speech: string): IntentInterface | null {
    for (const intent of this.intents)
      for (const trigger of intent.triggers)
        if (speech.toLowerCase().indexOf(trigger) > -1) return intent;
    return null;
  }
}
