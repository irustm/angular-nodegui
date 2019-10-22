import {
  Injectable,
  ApplicationModule,
  ErrorHandler,
  NgModule,
  RendererFactory2
} from '@angular/core';

import { NodeguiRendererFactory } from './renderer';
import { QWindowService } from './window';
import { ComponentsMap } from './components/components-map';

@Injectable()
export class NodeguiErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    console.error(error.message, error.stack);
  }
}

@NgModule({
  exports: [ApplicationModule],
  providers: [
    QWindowService,
    ComponentsMap,
    {
      provide: RendererFactory2,
      useClass: NodeguiRendererFactory,
      deps: [QWindowService, ComponentsMap]
    },
    { provide: ErrorHandler, useClass: NodeguiErrorHandler }
  ]
})
export class AngularNodeguiLibModule {}
