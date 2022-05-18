import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

export interface IntentionProps {
  id?: ObjectID;
  name: string;
  triggers: string[];
  answers: string[];
  subIntents: Intention;
}

@Entity()
export class Intention {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  triggers: string[];

  @Column()
  answers: string[];

  @Column(() => Intention)
  subIntents: Intention;

  constructor({ answers, id, name, subIntents, triggers }: IntentionProps) {
    this.id = id;
    this.name = name;
    this.triggers = triggers;
    this.answers = answers;
    this.subIntents = subIntents;
  }
}
