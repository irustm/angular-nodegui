import { QWidget, QLabel, QPushButton, QCheckBox } from '@nodegui/nodegui';

export class TextField extends QWidget {
  public parent: QLabel | QPushButton | QCheckBox;
  constructor(public value: string) {
    super();
  }

  setValue(value: string) {
    this.parent.setText(value);
  }
}
