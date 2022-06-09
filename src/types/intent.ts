export interface IntentInterface {
  name: string;
  triggers: string[];
  answers: string[];
  parentName?: string;
  childIntents?: IntentInterface[];
}
