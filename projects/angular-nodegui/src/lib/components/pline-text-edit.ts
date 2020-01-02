import { QPlainTextEdit } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';

export class NgPlainTextEdit extends QPlainTextEdit implements NgComponent {
  public static nodeName = 'plaintextedit';
  public parent: any;

  public appendChild(newChild: any): void {
    console.warn('plaintextedit do not have append child');
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
        value ? this.setPlainText(value as string) : this.clear();
        break;

      default:
        this.setProperty(name, value);
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

  setValue(value: string): void {
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
