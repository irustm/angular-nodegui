import { RendererStyleFlags2 } from '@angular/core';
import { QLabel, QPixmap, AspectRatioMode } from '@nodegui/nodegui';
import phin from 'phin';
import { NgComponent } from './component';
import { QVariantType } from '@nodegui/nodegui/dist/lib/QtCore/QVariant';

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

  public setNgProperty(
    name: string,
    value: string | boolean | AspectRatioMode | Buffer | QVariantType
  ): void {
    switch (name) {
      case 'src':
        if (!value) {
          return;
        }
        getLoadedPixmap(value as string)
        .then(pixmap => this.setPixmap(pixmap))
        .catch(console.warn);

        // TODO: not set current aspect size
        // const size = this.size();
        // this.scalePixmap(size.width, size.height);
        break;

      case 'buffer':
        const pixMap = new QPixmap();
        pixMap.loadFromData(value as Buffer);
        this.setPixmap(pixMap);
        break;

      case 'aspectRatioMode':
        this.setAspectRatioMode(value as AspectRatioMode);
        break;

      default:
        this.setProperty(name, value as QVariantType);
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

async function getLoadedPixmap(imageUrlOrPath: string): Promise<QPixmap> {
  const pixMap = new QPixmap();
  if (isValidUrl(imageUrlOrPath)) {
    const res = await phin(imageUrlOrPath);
    const imageBuffer = Buffer.from(res.body);
    pixMap.loadFromData(imageBuffer);
  } else {
    pixMap.load(imageUrlOrPath);
  }
  return pixMap;
}

export function isValidUrl(str: string) {
  try {
    // tslint:disable-next-line:no-unused-expression
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}
