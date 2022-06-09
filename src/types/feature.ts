/* eslint-disable @typescript-eslint/no-unused-vars */
import { pickAnswer } from 'src/utils/intentions';
import { IntentInterface } from './intent';

export interface FeatureResponse {
  messages: string[];
  path?: string;
}

export class FeatureBase {
  intents: IntentInterface[];
  topLevelIntents: IntentInterface[];
  moduleName: string;

  constructor(intents: IntentInterface[], moduleName: string) {
    this.setIntents(intents);
    this.moduleName = moduleName;
  }

  public setIntents(intents: IntentInterface[]) {
    this.intents = intents;
    this.topLevelIntents = intents.filter((intent) => !intent.parentName);
  }

  processCommand(
    intent: IntentInterface,
    _speech: string,
  ): FeatureResponse | Promise<FeatureResponse> {
    return {
      messages: [pickAnswer(intent)],
    };
  }

  checkIntent(speech: string, path = ''): IntentInterface | null {
    const [moduleName, ...query] = path.split('/');
    if (path) {
      if (moduleName !== this.moduleName) return null;
    }

    for (const intent of this.topLevelIntents)
      for (const trigger of intent.triggers)
        if (speech.toLowerCase().indexOf(trigger) > -1) return intent;
    return null;
  }
}
