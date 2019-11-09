import { QScrollArea } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';

export class NgScrollArea extends QScrollArea implements NgComponent {
  public static nodeName = 'scrollarea';
  public parent: any;

  public appendChild(newChild: any): void {
    throw new Error('Method not implemented.');
  }

  public insertBefore(newChild: any, refChild: any) {}

  public setNgAttribute(
    name: string,
    value: string,
    namespace?: string | null
  ): void {}

  public setProperty(name: string, value: boolean | string): void {
    switch (name) {
      case 'enabled':
        this.setEnabled(value as boolean);
        break;
      default:
        break;
    }
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
    throw new Error('Method not implemented.');
  }
  removeClass(name: string): void {
    throw new Error('Method not implemented.');
  }
  removeStyle(style: string, flags?: RendererStyleFlags2): void {
    throw new Error('Method not implemented.');
  }
}