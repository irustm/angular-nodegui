import { Injectable } from '@angular/core';
import { QMainWindow, FlexLayout, QWidget } from '@nodegui/nodegui';

@Injectable()
export class QWindowService {
  public window: QMainWindow;
  public rootLayout: FlexLayout;
  public centralWidget: QWidget;

  constructor() {
    this.window = new QMainWindow();
    this.centralWidget = new QWidget();
    this.centralWidget.setObjectName('myroot');
  }
}
