import {
  Injectable,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RendererType2
} from '@angular/core';
import { QWidget, QPushButton, QLabel, FlexLayout } from '@nodegui/nodegui';
import { QWindowService } from './window';

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
    const label = new QLabel(); // may be use Qwidget? need for set button to text
    label.setText(value);
    label.setInlineStyle(`
      color: red;
    `);
    return label;
  }

  selectRootElement(): any {
    return this.window.rootLayout;
  }

  addClass(el: any, name: string): void {}

  appendChild(parent: FlexLayout, newChild: any): void {
    if (newChild) {
      if (parent instanceof QPushButton && newChild instanceof QLabel) {
        parent.setText(newChild.text);
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
  }

  setValue(node: any, value: string): void {
    // use new values may be button not set text, may be use widget for text?
    node.setText(value);
  }
}
