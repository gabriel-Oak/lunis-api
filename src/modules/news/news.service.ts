import { Injectable } from '@nestjs/common';
import { HttpService } from 'src/services/http.service';
import { FeatureBase, FeatureResponse } from 'src/types/feature';
import { IntentInterface } from 'src/types/intent';
import { pickAnswer } from 'src/utils/intentions';
import { newsIntents } from './news.intents';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const xml2js = require('xml2js');

// TODO: Extranct from speech
const NEWS_COUNT = 10;

@Injectable()
export class NewsService extends FeatureBase {
  constructor(private readonly httpService: HttpService) {
    super(newsIntents);
  }

  async processCommand(
    intent: IntentInterface,
    // _speech: string,
  ): Promise<FeatureResponse> {
    const response = await this.httpService.get(
      'https://news.google.com/rss?hl=pt-BR&gl=BR&ceid=BR:pt-419',
    );

    const {
      rss: { channel },
    } = await xml2js.parseStringPromise(response);
    const news = channel[0].item
      .slice(0, NEWS_COUNT)
      .map((item: { title: string }) => item.title[0]);

    return {
      messages: [pickAnswer(intent), ...news],
    };
  }
}
