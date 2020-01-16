import { QScrollArea, FlexLayout } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';

export class NgScrollArea extends QScrollArea implements NgComponent {
  public static nodeName = 'scrollarea';
  public parent: any;

  public appendChild(newChild: any): void {
    if (this.contentWidget) {
      console.warn('ScrollView cant have more than one child node');
      return;
    }
    this.setWidget(newChild);
  }

  public insertBefore(newChild: any, refChild: any) {
    throw new Error('Method not implemented.');
  }

  public setNgAttribute(
    name: string,
    value: string,
    namespace?: string | null
  ): void {
    switch (name) {
      case 'id':
        this.setObjectName(value);
        break;

      default:
        break;
    }
  }

  public setNgProperty(name: string, value: boolean | string): void {
    this.setProperty(name, value);
  }

  public setStyle(
    style: string,
    value: any,
    flags?: RendererStyleFlags2
  ): void {
    this.setInlineStyle(`${style}:${value}`);
  }

  public setValue(value: string): void {}

  removeAttribute(name: string, namespace?: string): void {
    throw new Error('Method not implemented.');
  }

  removeChild(oldChild: any): void {
    const removedChild = this.takeWidget();
    if (removedChild) {
      removedChild.close();
    }
    oldChild.close();
  }

  removeClass(name: string): void {
    throw new Error('Method not implemented.');
  }
  removeStyle(style: string, flags?: RendererStyleFlags2): void {
    throw new Error('Method not implemented.');
  }
}
