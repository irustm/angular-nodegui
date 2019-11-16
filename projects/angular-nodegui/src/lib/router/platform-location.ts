import { Injectable } from '@angular/core';
import { PlatformLocation, LocationChangeListener } from '@angular/common';
import { NodeGuiLocationStrategy } from './location-strategy';

@Injectable()
export class NodeguiPlatformLocation extends PlatformLocation {
  constructor(private locationStrategy: NodeGuiLocationStrategy) {
    super();
  }

  getState(): any {
    return undefined;
  }

  // tslint:disable-next-line:member-ordering
  readonly hostname: string;
  // tslint:disable-next-line:member-ordering
  readonly href: string;
  // tslint:disable-next-line:member-ordering
  readonly port: string;
  // tslint:disable-next-line:member-ordering
  readonly protocol: string;

  getBaseHrefFromDOM(): string {
    return '/';
  }

  onPopState(fn: LocationChangeListener): void {
    this.locationStrategy.onPopState(fn);
  }

  onHashChange(fn: LocationChangeListener): void {}

  get search(): string {
    return '';
  }
  get hash(): string {
    return '';
  }
  get pathname(): string {
    return this.locationStrategy.path();
  }
  set pathname(newPath: string) {
    throw new Error('NodeguiPlatformLocation set pathname - not implemented');
  }

  pushState(state: any, title: string, url: string): void {
    this.locationStrategy.pushState(state, title, url, null);
  }

  replaceState(state: any, title: string, url: string): void {
    this.locationStrategy.replaceState(state, title, url, null);
  }

  forward(): void {
    throw new Error('NodeguiPlatformLocation.forward() - not implemented');
  }

  back(): void {
    this.locationStrategy.back();
  }
}
