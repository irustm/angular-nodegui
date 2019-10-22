import { QWidget, QLabel, QPushButton } from '@nodegui/nodegui';

export class TextField extends QWidget {
  public parent: QLabel | QPushButton;
  constructor(public value: string) {
    super();
  }

  setValue(value: string) {
    this.parent.setText(value);
  }
}
