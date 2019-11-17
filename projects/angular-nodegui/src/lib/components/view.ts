import { QWidget, FlexLayout } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';

export class NgView extends QWidget implements NgComponent {
  public static nodeName = 'view';
  public parent: any;

  public appendChild(newChild: any): void {
    if (!newChild) {
      return;
    }
    if (!this.layout) {
      this.createLayout();
    }

    this.layout.addWidget(newChild);
  }

  public insertBefore(newChild: any, refChild: any) {
    if (!newChild) {
      return;
    }
    if (!this.layout) {
      this.createLayout();
    }
    (this.layout as FlexLayout).insertChildBefore(newChild, this);
  }

  removeChild(oldChild: NgView): void {
    oldChild.hide(); // it's necessary that there's no overlapping of widgets when removing
    (this.layout as FlexLayout).removeWidget(oldChild);
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

  public setProperty(name: string, value: any): void {
    throw new Error('Method not implemented.');
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

  removeClass(name: string): void {
    throw new Error('Method not implemented.');
  }
  removeStyle(style: string, flags?: RendererStyleFlags2): void {
    throw new Error('Method not implemented.');
  }

  private createLayout() {
    const flexLayout = new FlexLayout();
    flexLayout.setFlexNode(this.getFlexNode());
    this.setLayout(flexLayout);
    this.layout = flexLayout;
  }
}
