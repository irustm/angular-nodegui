import { QProgressBar } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';

export class NgProgressBar extends QProgressBar implements NgComponent {
  public static nodeName = 'progressbar';
  public parent: any;

  public appendChild(newChild: any): void {
    console.warn('progressbar do not have append child');
  }

  public insertBefore(newChild: any, refChild: any) {}

  public setNgAttribute(
    name: string,
    value: string,
    namespace?: string | null
  ): void {}

  public setNgProperty(name: string, value: any): void {
    switch (name) {
      case 'value':
        this.setValue(value);
        break;
      case 'minimum':
        this.setMinimum(value);
        break;
      case 'maximum':
        this.setMaximum(value);
        break;
      case 'orientation':
        this.setOrientation(value);
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

  public setValue(value: number): void {
    super.setValue(value);
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
