import { QWidget } from '@nodegui/nodegui';

export class TextField extends QWidget {
  public parent: any;
  constructor(public value: string) {
    super();
  }
}
