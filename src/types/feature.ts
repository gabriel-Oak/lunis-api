/* eslint-disable @typescript-eslint/no-unused-vars */
import { generalIntents } from 'src/utils/general.intents';
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
    path?: string,
  ): FeatureResponse | Promise<FeatureResponse> {
    return {
      messages: [pickAnswer(intent)],
      path: intent.childIntents?.length
        ? `${path ? `${path}` : this.moduleName}/${intent.name}`
        : '',
    };
  }

  private queryIntents(path: string): IntentInterface {
    const [_moduleName, first, ...query] = path.split('/');

    let parent = this.topLevelIntents.find((intent) => intent.name === first);
    for (const segment of query) {
      if (parent.childIntents?.length)
        parent = parent.childIntents.find((intent) => intent.name === segment);
    }
    return parent;
  }

  checkIntent(speech: string, path = ''): IntentInterface | null {
    const [moduleName, ...query] = path.split('/');
    if (moduleName && moduleName !== this.moduleName) return null;

    let searchingIntents = this.topLevelIntents;

    if (query.length) {
      const parent = this.queryIntents(path);
      searchingIntents = parent.childIntents;
    }

    for (const intent of searchingIntents)
      for (const trigger of intent.triggers)
        if (speech.toLowerCase().indexOf(trigger) > -1) return intent;

    if (moduleName) {
      const cancell = generalIntents.find((intent) => intent.name === 'cancel');
      for (const trigger of cancell.triggers)
        if (speech.toLowerCase().indexOf(trigger) > -1) return cancell;
    }

    return null;
  }
}
