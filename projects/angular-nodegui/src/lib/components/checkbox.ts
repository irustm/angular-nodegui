import { QCheckBox } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';
import { TextField } from './nodes';

export class NgCheckbox extends QCheckBox implements NgComponent {
  public static nodeName = 'checkbox';
  public parent: any;

  public appendChild(newChild: any): void {
    if (newChild instanceof TextField) {
      newChild.parent = this;
      this.setText(newChild.value);
    } else {
      console.warn('checkbox may be appendChild only TextField');
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

  public setNgProperty(name: string, value: boolean): void {
    switch (name) {
      case 'checked':
        this.setChecked(value);
        break;
      case 'enabled':
        this.setEnabled(value);
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
