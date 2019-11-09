import { QLabel } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';
import { TextField } from './nodes';

export class NgText extends QLabel implements NgComponent {
  public static nodeName = 'text';
  public parent: any;

  public appendChild(newChild: any): void {
    if (newChild instanceof TextField) {
      newChild.parent = this;
      this.setText(newChild.value);
    } else {
      console.warn('Text may be appendChild only TextField');
    }
  }

  public insertBefore(newChild: any, refChild: any) {}

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

  public setProperty(name: string, value: any): void {
    switch (name) {
      case 'style':
        this.setStyleSheet(value);
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

  public setValue(value: string): void {
    this.setText(value);
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
