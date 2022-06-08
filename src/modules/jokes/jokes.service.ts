import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    for (const trigger of belongs.triggers) {
      if (speech.indexOf(trigger) > -1) {
        const query = speech.replace('.', '').split(trigger);
        console.log(query, speech, trigger);

        if (query.length < 2)
          throw new HttpException(
            'Desculpe, não entendi o tipo da piada, por favor, tente de novo!',
            HttpStatus.BAD_REQUEST,
          );

        const filteredJokes = jokes.filter(
          (joke) => joke.category.toLowerCase().indexOf(query[1]) > -1,
        );

        if (!filteredJokes.length)
          throw new HttpException(
            `Desculpe, não tenho uma piada sobre ${query[1]}`,
            HttpStatus.BAD_REQUEST,
          );

        joke = filteredJokes[Math.floor(Math.random() * filteredJokes.length)];
        break;
      }
    }

    return {
      messages: [pickAnswer(intent), joke.title, ...joke.joke],
    };
  }
}
