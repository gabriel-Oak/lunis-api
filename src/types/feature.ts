/* eslint-disable @typescript-eslint/no-unused-vars */
import { IntentInterface } from './intent';

export interface FeatureResponse {
  messages: string[];
  path?: string;
}

export class FeatureBase {
  intents: IntentInterface[];

  constructor(intents: IntentInterface[]) {
    this.intents = intents;
  }

  processCommand(
    intent: IntentInterface,
    _speech: string,
  ): FeatureResponse | Promise<FeatureResponse> {
    return {
      messages: [
        intent.answers[Math.floor(Math.random() * intent.answers.length)],
      ],
    };
  }

  checkIntent(speech: string): IntentInterface | null {
    for (const intent of this.intents)
      for (const trigger of intent.triggers)
        if (speech.indexOf(trigger) > -1) return intent;
    return null;
  }
}
