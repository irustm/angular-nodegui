import { Injectable } from '@angular/core';
import { LocationStrategy, LocationChangeListener } from '@angular/common';
import { UrlTree, DefaultUrlSerializer } from '@angular/router';

@Injectable()
export class NodeGuiLocationStrategy extends LocationStrategy {
  private popStateCallbacks = new Array<(_: any) => any>();
  private currentUrlTree: UrlTree;

  path(includeHash?: boolean): string {
    return '/';
  }
  prepareExternalUrl(internal: string): string {
    return internal;
  }
  pushState(state: any, title: string, url: string, queryParams: string): void {
    const urlSerializer = new DefaultUrlSerializer();
    this.currentUrlTree = urlSerializer.parse(url);
    const urlTreeRoot = this.currentUrlTree.root;
  }
  replaceState(
    state: any,
    title: string,
    url: string,
    queryParams: string
  ): void {}
  forward(): void {
    throw new Error('Method not implemented.');
  }
  back(): void {
    throw new Error('Method not implemented.');
  }
  onPopState(fn: LocationChangeListener): void {
    this.popStateCallbacks.push(fn);
  }
  getBaseHref(): string {
    return '';
  }
}
