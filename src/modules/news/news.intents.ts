import { IntentInterface } from 'src/types/intent';

export const newsIntents: IntentInterface[] = [
  {
    name: 'news',
    triggers: [
      'as notícias',
      'ultimas notícias',
      'notícias recentes',
      'as novidades',
    ],
    answers: [
      'Obtendo últimas notícias!',
      'Ok, fique ligado no que está rolando!',
      'Segura aí!',
      'Aqui estão as ultimas notícias!',
      'Estas são as notícias que encontrei:',
    ],
  },
  {
    name: 'specific_new',
    triggers: ['notícia ', 'matéria ', 'manchete '],
    answers: ['Desculpe, não consegui encontrar esta notícia'],
  },
];
