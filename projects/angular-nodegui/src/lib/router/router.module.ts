import {
  NgModule,
  Optional,
  SkipSelf,
  NO_ERRORS_SCHEMA,
  ModuleWithProviders
} from '@angular/core';
import { NodeGuiLocationStrategy } from './location-strategy';
import { LocationStrategy, PlatformLocation } from '@angular/common';
import { NodeguiPlatformLocation } from './platform-location';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const NS_ROUTER_PROVIDERS = [
  {
    provide: NodeGuiLocationStrategy,
    useFactory: provideLocationStrategy,
    deps: [[NodeGuiLocationStrategy, new Optional(), new SkipSelf()]]
  },
  { provide: LocationStrategy, useExisting: NodeGuiLocationStrategy },
  NodeguiPlatformLocation,
  { provide: PlatformLocation, useExisting: NodeguiPlatformLocation }
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NodeguiRouterModule {
  static forRoot(
    routes: Routes,
    config?: ExtraOptions
  ): ModuleWithProviders<NodeguiRouterModule> {
    return {
      ngModule: NodeguiRouterModule,
      providers: [
        ...RouterModule.forRoot(routes, config).providers,
        ...NS_ROUTER_PROVIDERS
      ]
    };
  }

  static forChild(routes: Routes): ModuleWithProviders<NodeguiRouterModule> {
    return {
      ngModule: NodeguiRouterModule,
      providers: RouterModule.forChild(routes).providers
    };
  }
}

export function provideLocationStrategy(
  locationStrategy: NodeGuiLocationStrategy
): NodeGuiLocationStrategy {
  return locationStrategy ? locationStrategy : new NodeGuiLocationStrategy();
}
