import { QDial } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';

export class NgDial extends QDial implements NgComponent {
  public static nodeName = 'dial';
  public parent: any;

  public appendChild(newChild: any): void {
    console.warn('dial do not have append child');
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

  public setNgProperty(name: string, value: boolean | number): void {
    switch (name) {
      case 'enabled':
        this.setEnabled(value as boolean);
        break;
      case 'notchesVisible':
        this.setNotchesVisible(value as boolean);
        break;
      case 'wrapping':
        this.setWrapping(value as boolean);
        break;
      case 'notchTarget':
        this.setNotchTarget(value as number);
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

  public setValue(value: any): void {}

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
