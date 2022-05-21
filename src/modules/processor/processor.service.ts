import { Injectable } from '@nestjs/common';
import { FeatureBase, FeatureResponse } from 'src/types/feature';
import { DialogueService } from '../dialogue/dialogue.service';
import { NewsService } from '../news/news.service';
import { ProcessCommandDto } from './processor.dtos';
@Injectable()
export class ProcessorService {
  features: FeatureBase[];

  constructor(
    private readonly dialogueService: DialogueService,
    private readonly newsService: NewsService,
  ) {
    this.features = [this.newsService, this.dialogueService];
  }

  async process(body: ProcessCommandDto): Promise<FeatureResponse> {
    for (const feature of this.features) {
      const intent = feature.checkIntent(body.speech);
      if (intent) return feature.processCommand(intent, body.speech);
    }

    return {
      messages: ['Desculpe, não entendi, poderia tentar de novo?'],
    };
  }
}
