import { QLabel, QPixmap, AspectRatioMode } from '@nodegui/nodegui';
import { NgComponent } from './component';
import { RendererStyleFlags2 } from '@angular/core';

export class NgImage extends QLabel implements NgComponent {
  public static nodeName = 'image';
  public parent: any;

  public originalPixmap?: QPixmap;
  public aspectRatioMode?: AspectRatioMode;

  public appendChild(newChild: any): void {
    console.warn('image not supported appendChild');
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

  public setProperty(
    name: string,
    value: string | boolean | AspectRatioMode
  ): void {
    switch (name) {
      case 'enabled':
        this.setEnabled(value as boolean);
        break;
      case 'src':
        if (!value) {
          return;
        }
        const pixMap = new QPixmap(value as string);

        this.setPixmap(pixMap);
        // TODO: not set current aspect size
        // const size = this.size();
        // this.scalePixmap(size.width, size.height);
        break;
      case 'aspectRatioMode':
        this.setAspectRatioMode(value as AspectRatioMode);
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

  public setAspectRatioMode(mode: AspectRatioMode) {
    this.aspectRatioMode = mode;
  }

  public scalePixmap(width: number, height: number) {
    if (this.originalPixmap) {
      return super.setPixmap(
        this.originalPixmap.scaled(width, height, this.aspectRatioMode)
      );
    }
  }

  public setPixmap(pixmap: QPixmap) {
    super.setPixmap(pixmap);
    this.originalPixmap = pixmap;
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
