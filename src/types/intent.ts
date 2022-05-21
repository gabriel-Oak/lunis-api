export interface IntentInterface {
  name: string;
  triggers: string[];
  answers: string[];
  parent?: string;
}
