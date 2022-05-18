import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

export interface IntentionProps {
  id?: ObjectID;
  name: string;
  triggers: string[];
  answers: string[];
  childIntents?: Intention[];
  parentIntent?: Intention;
}

@Entity()
@Tree('materialized-path')
export class Intention {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  triggers: string[];

  @Column()
  answers: string[];

  @TreeChildren()
  childIntents?: Intention[];

  @TreeParent()
  parentIntent?: Intention;

  constructor(props?: IntentionProps) {
    if (props) {
      this.id = props.id;
      this.name = props.name;
      this.triggers = props.triggers;
      this.answers = props.answers;
      this.parentIntent = props.parentIntent;
      this.childIntents = props.childIntents;
    }
  }
}
