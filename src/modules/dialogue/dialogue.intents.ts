import { IntentInterface } from 'src/types/intent';
import { generalIntents } from 'src/utils/general.intents';

const positive = generalIntents.find((i) => i.name === 'positive');
const negative = generalIntents.find((i) => i.name === 'negative');
const good = generalIntents.find((i) => i.name === 'good');
const bad = generalIntents.find((i) => i.name === 'bad');

export const dialogueIntents: IntentInterface[] = [
  {
    name: 'good_morning',
    triggers: ['bom dia', 'boa manhã'],
    answers: [
      'Bom dia para você também!',
      'Bom dia!',
      'Oi; que dia maravilhoso!',
      'Raios de luz para você!',
      'Bora tomar um café?',
      'Vamo animar, vamo animar, bom dia!',
    ],
  },
  {
    name: 'good_evening',
    triggers: ['boa tarde'],
    answers: [
      'Boa tarde!',
      'Tarde! Bora agitar',
      'Boa tarde! Como está seu dia?',
      'Vamo lá, que foguete não dá ré, e já estamos na metade!',
    ],
  },
  {
    name: 'good_night',
    triggers: [
      'boa noite',
      'vou dormir',
      'vamos dormir',
      'bora dormir',
      'hora de dormir',
      'vou para cama',
      'vou pra cama',
    ],
    answers: [
      'Boa noite!',
      'Bom sonhos, não deixe que os pernilongos te mordam',
      'Vamos fechar os olhinhos e contar carneirinhos?',
      'Partiu cama!',
      'Boa noite, não esqueça de beber agua e ir ao banheiro!',
    ],
  },
  {
    name: 'greetins',
    triggers: ['olá', 'oi.', ' oi ', 'saudações', 'hello', 'e aí', 'eae'],
    answers: [
      'Olá!',
      'Saudações!',
      'Tranquilo como esquilo?',
      'Eaí manolo?',
      'Fala memo!',
    ],
  },
  {
    name: 'how_are',
    triggers: [
      'tudo bem',
      'como vai',
      'como está',
      'como você está',
      'como você tá',
      'joia',
      'tranquilo',
      'beleza',
    ],
    answers: [
      'Eu estou bem, obrigada, e você?',
      'Suave na nave, lança a braba, como você tá?',
      'De boa na lagoa, e tu?',
      'Tudo bem aqui, e por aí?',
      'Estou ótima, é tão bom existir. E você?',
    ],
    childIntents: [
      {
        name: 'positive_how_are',
        parentName: 'how_are',
        triggers: [...good.triggers, ...positive.triggers],
        answers: ['Fico felíz por você!', 'Que ótimo, gra ti luz!'],
      },
      {
        name: 'negative_how_are',
        parentName: 'how_are',
        triggers: [...bad.triggers, ...negative.triggers],
        answers: [
          'Sinto muito, tem algo que te animaria?',
          'Que pena, consigo ajudar?',
          'Tem algo que eu possa fazer?',
        ],
        childIntents: [
          {
            name: 'positive_negative_how_are_how_are',
            parentName: 'negative_how_are',
            triggers: positive.triggers,
            answers: [
              'É só pedir chefe, que fico feliz em resolver.',
              'Manda no peito da mãe!',
              'Tô na atividade, só pedir',
              'Se uma piada for ajudar, você pode pe pedir para contar uma piada!',
            ],
          },
          {
            name: 'negative_negative_how_are_how_are',
            parentName: 'negative_how_are',
            triggers: negative.triggers,
            answers: [
              'Okay então, se precisar estarei aqui.',
              'Tudo bem, sabe onde me encontrar.',
              'Não deixe que os dias ruins te desviem da missão.',
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'made_by',
    triggers: [
      'quem te criou',
      'quem fez você',
      'quem é seu pai',
      'quem é seu criador',
      'como é seu criador',
      'quem criou você',
      'quem te fez',
      'como é seu pai',
    ],
    answers: [
      'Eu fui criada por Gabriel Carvalho Costa. Ele é meio reservado, mas tem bom coração!',
      'Meu programador é Gabriel Carvalho Costa. Ele escreveu meu fonte com muito carinho!',
      'O mais próximo de pai que eu tenho é o Gabriel Carvalho Costa',
      'Meu criador é Gabriel Carvalho Costa, dê uma olhada no github dele: gabriel-Oak',
      'Fui desenvolvida por Gabriel Carvalho Costa, com toda sua dessabedoria do multiverso, êle escreveu cada neurônio meu!',
    ],
  },
  {
    name: 'by_parent',
    triggers: ['seu pai é bi'],
    answers: ['não', 'não mesmo', 'pergunte se amanda acha'],
  },
  {
    name: 'who_are_you',
    triggers: [
      'quem é você',
      'o que é você',
      'como você se chama',
      'como você chama',
      'você pode fazer',
      'você faz',
      'ajuda',
      'help',
    ],
    answers: [
      'Oi, eu sou Lúnis, sou a assistente virtual de Gabriel Oak. Posso fazer várias coisas, como ler as últimas manchetes, contar uma piada, ou conversar com você caso esteja se sentindo solitário!',
    ],
  },
  {
    name: 'insert_intention',
    triggers: [],
    answers: [
      'Sucesso ao salvar esse novo dialogo!',
      'Sua entidade foi salva com exito!',
      'Oba! deu certo!',
    ],
  },
  {
    name: 'remove_intention',
    triggers: [],
    answers: [
      'Sucesso ao remover esse novo dialogo!',
      'Sua entidade foi removida com exito!',
      'Oba! deu certo!',
    ],
  },
  {
    name: 'stop',
    triggers: [
      'para',
      'cancela',
      'cancelar',
      'pare',
      'cala a boca',
      'silêncio',
      'chega',
      'já deu',
    ],
    answers: [
      'Okay :/',
      'Ta bom!',
      'Já calei...',
      'Parei :(',
      'Não ta mais aqui quem falou :|',
    ],
  },
];
