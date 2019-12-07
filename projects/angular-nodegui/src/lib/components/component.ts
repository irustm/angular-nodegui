import { RendererStyleFlags2 } from '@angular/core';

export interface NgComponent {
  appendChild(newChild: any): void;

  insertBefore(newChild: any, refChild: any): void;

  setNgAttribute(name: string, value: string, namespace?: string | null): void;

  setNgProperty(name: string, value: any): void;

  setStyle(style: string, value: any, flags?: RendererStyleFlags2): void;

  setValue(value: any): void;

  removeAttribute(name: string, namespace?: string | null): void;

  removeChild(oldChild: any): void;

  removeClass(name: string): void;

  removeStyle(style: string, flags?: RendererStyleFlags2): void;
}
