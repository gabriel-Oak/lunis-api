import { IntentInterface } from 'src/types/intent';

export const pickAnswer = (intent: IntentInterface) =>
  intent.answers[Math.floor(Math.random() * intent.answers.length)];
