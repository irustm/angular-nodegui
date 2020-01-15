import { QComboBox, QIcon, QVariant } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';

interface ComboBoxItem {
  text: string;
  icon?: QIcon;
  userData?: QVariant;
}

export class NgCombobox extends QComboBox implements NgComponent {
  public static nodeName = 'combobox';
  public parent: any;

  public appendChild(newChild: any): void {
    console.warn('combobox do not have append child');
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

  public setNgProperty(name: string, value: ComboBoxItem[] | any): void {
    if (name === 'items') {
      this.clear();

      value.forEach(item => {
        this.addItem(item.icon, item.text, item.userData);
      });
    }

    this.setProperty(name, value);
  }

  public setStyle(
    style: string,
    value: any,
    flags?: RendererStyleFlags2
  ): void {
    this.setInlineStyle(`${style}:${value}`);
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
