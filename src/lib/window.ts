import { Injectable } from '@angular/core';
import { QMainWindow, FlexLayout, QWidget } from '@nodegui/nodegui';

@Injectable()
export class QWindowService {
  public window: QMainWindow;
  public rootLayout: FlexLayout;
  constructor() {
    this.window = new QMainWindow();
    const centralWidget = new QWidget();
    centralWidget.setObjectName('myroot');

    this.rootLayout = new FlexLayout();
    centralWidget.setLayout(this.rootLayout);
    this.window.setCentralWidget(centralWidget);
  }
}
