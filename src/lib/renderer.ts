import {
  Injectable,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RendererType2
} from '@angular/core';
import { QWidget, QPushButton, QLabel, FlexLayout } from '@nodegui/nodegui';
import { QWindowService } from './window';
import { TextField } from './nodes';

@Injectable()
export class NodeguiRendererFactory implements RendererFactory2 {
  protected renderer: Renderer2;

  constructor(private window: QWindowService) {
    this.renderer = new NodeguiRenderer(window);
  }

  end() {
    this.window.window.show();
  }

  createRenderer(hostElement: any, type: RendererType2 | null): Renderer2 {
    return this.renderer;
  }
}

export class NodeguiRenderer implements Renderer2 {
  readonly data: { [p: string]: any };
  destroyNode: ((node: any) => void) | null;

  constructor(private window: QWindowService) {}

  createElement(name: string, namespace?: string | null): any {
    const button = new QPushButton();
    button.setObjectName('button');
    return button;
  }

  createText(value: string): any {
    // may be use Qwidget? need for set button to text

    // const label = new QLabel();
    // label.setText(value);
    // label.setInlineStyle(`
    //  color: red;
    // `);
    return new TextField(value);
  }

  selectRootElement(): any {
    return this.window.rootLayout;
  }

  addClass(el: any, name: string): void {
    console.log(el, name);
  }

  appendChild(parent: FlexLayout, newChild: any): void {
    // console.log(parent, newChild);

    if (newChild) {
      if (parent instanceof FlexLayout && newChild instanceof TextField) {
        const label = new QLabel();
        newChild.parent = label;
        label.setText(newChild.value);
        parent.addWidget(label);
      } else if (
        parent instanceof QPushButton &&
        newChild instanceof TextField
      ) {
        newChild.parent = parent;
        parent.setText(newChild.value);
      } else {
        parent.addWidget(newChild);
      }
    }
  }

  createComment(value: string): any {}

  destroy(): void {}

  insertBefore(parent: any, newChild: any, refChild: any): void {
    console.log('insertBefore');
  }

  listen(
    target: any,
    eventName: string,
    callback: (event: any) => boolean | void
  ): () => void {
    return () => {};
  }

  nextSibling(node: any): any {
    console.log('nextSibling');
  }

  parentNode(node: any): any {}

  removeAttribute(el: any, name: string, namespace?: string | null): void {}

  removeChild(parent: any, oldChild: any): void {}

  removeClass(el: any, name: string): void {}

  removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void {}

  setAttribute(
    el: any,
    name: string,
    value: string,
    namespace?: string | null
  ): void {
    el[name] = value;
  }

  setProperty(el: any, name: string, value: any): void {
    console.log('setProperty', el, name, value);
    if (name === 'styles') {
      name = 'style';
    } else {
      el[name] = value;
    }
  }

  setStyle(
    el: any,
    style: string,
    value: any,
    flags?: RendererStyleFlags2
  ): void {
    el[style] = value;
    // console.log('setStyle', el, style, value);
    el.setInlineStyle(`${style}:${value}`);
  }

  setValue(node: any, value: string): void {
    if (node instanceof TextField) {
      node.parent.setText(value);
    } else {
      node.setText(value);
    }
  }
}
