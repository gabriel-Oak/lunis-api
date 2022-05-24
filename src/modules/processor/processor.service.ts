import { Injectable } from '@nestjs/common';
import { FeatureBase, FeatureResponse } from 'src/types/feature';
import { DialogueService } from '../dialogue/dialogue.service';
import { JokesService } from '../jokes/jokes.service';
import { NewsService } from '../news/news.service';
import { ProcessCommandDto } from './processor.dtos';
@Injectable()
export class ProcessorService {
  features: FeatureBase[];

  constructor(
    private readonly dialogueService: DialogueService,
    private readonly jokesService: JokesService,
    private readonly newsService: NewsService,
  ) {
    this.features = [this.jokesService, this.newsService, this.dialogueService];
  }

  async process(body: ProcessCommandDto): Promise<FeatureResponse> {
    const speech = body.speech.replace(/[\?!]/g, '').toLowerCase();
    for (const feature of this.features) {
      const intent = feature.checkIntent(speech);
      if (intent) return feature.processCommand(intent, speech);
    }

    return {
      messages: ['Desculpe, não entendi, poderia tentar de novo?'],
    };
  }
}
