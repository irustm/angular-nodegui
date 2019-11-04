import { QSpinBox } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';

interface Range {
  minimum: number;
  maximum: number;
}

export class NgSpinnBox extends QSpinBox implements NgComponent {
  public static nodeName = 'spinbox';
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

  public setProperty(
    name: string,
    value: boolean | string | Range | number
  ): void {
    switch (name) {
      case 'prefix':
        this.setPrefix(value as string);
        break;
      case 'suffix':
        this.setSuffix(value as string);
        break;
      case 'singleStep':
        this.setSingleStep(value as number);
        break;
      case 'range':
        this.setRange((value as Range).minimum, (value as Range).maximum);
        break;
      case 'value':
        this.setValue(value as number);
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
