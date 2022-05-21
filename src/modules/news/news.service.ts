import { Injectable } from '@nestjs/common';
import { FeatureBase, FeatureResponse } from 'src/types/feature';
import { newsIntents } from './news.intents';

@Injectable()
export class NewsService extends FeatureBase {
  constructor() {
    super(newsIntents);
  }

  async processCommand(): Promise<FeatureResponse> {
    return {
      messages: [
        'TODO: implementation to get news from https://news.google.com/rss?hl=pt-BR&gl=BR&ceid=BR:pt-419',
      ],
    };
  }
}
