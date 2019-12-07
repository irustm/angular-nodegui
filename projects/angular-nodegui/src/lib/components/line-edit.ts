import { QLineEdit } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';

export class NgLineEdit extends QLineEdit implements NgComponent {
  public static nodeName = 'linedit';
  public parent: any;

  public appendChild(newChild: any): void {
    throw new Error('Method not implemented.');
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

  public setNgProperty(name: string, value: boolean | string): void {
    switch (name) {
      case 'text':
        value ? this.setText(value as string) : this.clear();
        break;
      case 'placeholderText':
        this.setPlaceholderText(value as string);
        break;
      case 'readOnly':
        this.setReadOnly(value as boolean);
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
