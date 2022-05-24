import { HttpException, Injectable } from '@nestjs/common';
import { FeatureBase, FeatureResponse } from 'src/types/feature';
import { IntentInterface } from 'src/types/intent';
import { jokesIntents } from './jokes.intents';
import { jokes } from './jokes';
import { generalIntents } from '../../utils/general.intents';
import { pickAnswer } from 'src/utils/intentions';

@Injectable()
export class JokesService extends FeatureBase {
  constructor() {
    super(jokesIntents);
  }

  processCommand(intent: IntentInterface, speech: string): FeatureResponse {
    const belongs = generalIntents.find((i) => i.name == 'belongs');
    let joke = jokes[Math.floor(Math.random() * jokes.length)];

    try {
      for (const trigger of belongs.triggers) {
        if (speech.indexOf(trigger) > -1) {
          const query = speech.split(trigger);
          if (query.length < 2)
            throw new Error(
              'Desculpe, não entendi o tipo da piada, por favor, tente de novo!',
            );

          const filteredJokes = jokes.filter(
            (joke) => joke.category.toLowerCase().indexOf(query[1]) > -1,
          );

          if (!filteredJokes.length)
            throw new Error(`Desculpe, não tenho uma piada sobre ${query[1]}`);

          joke =
            filteredJokes[Math.floor(Math.random() * filteredJokes.length)];
          break;
        }
      }

      return {
        messages: [pickAnswer(intent), joke.title, ...joke.joke],
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
