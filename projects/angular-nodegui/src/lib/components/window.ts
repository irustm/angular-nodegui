import { FlexLayout, QMainWindow, WindowType } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';

export class NgWindow extends FlexLayout implements NgComponent {
  public static nodeName = 'window';
  public parent: QMainWindow;

  public appendChild(newChild: any): void {
    this.addWidget(newChild);
  }

  public insertBefore(newChild: any, refChild: any) {}

  public setNgAttribute(
    name: string,
    value: string,
    namespace?: string | null
  ): void {
    switch (name) {
      case 'title':
        this.parent.setWindowTitle(value);
        break;
      case 'id':
        this.parent.setObjectName(value);
        break;

      default:
        break;
    }
  }

  public setNgProperty(name: string, value: any): void {
    throw new Error('Method not implemented.');
  }

  public setStyle(
    style: string,
    value: any,
    flags?: RendererStyleFlags2
  ): void {
    throw new Error('Method not implemented.');
  }

  public setValue(value: string): void {
    throw new Error('Method not implemented.');
  }

  removeAttribute(name: string, namespace?: string): void {
    throw new Error('Method not implemented.');
  }
  removeChild(oldChild: any): void {
    throw new Error('Method not implemented.');
  }
  removeClass(name: string): void {
    throw new Error('Method not implemented.');
  }
  removeStyle(style: string, flags?: RendererStyleFlags2): void {
    throw new Error('Method not implemented.');
  }
}
