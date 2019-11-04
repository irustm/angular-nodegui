import {
  COMPILER_OPTIONS,
  platformCore,
  createPlatformFactory,
  Sanitizer
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ElementSchemaRegistry } from '@angular/compiler';

import { NodeguiElementSchemaRegistry } from './schema-registry';
import { NodeguiSanitizer } from './sanitizer';

export const platformNodeguiStatic = createPlatformFactory(
  platformCore,
  'NodeguiStatic',
  [
    { provide: DOCUMENT, useValue: {} },
    { provide: Sanitizer, useClass: NodeguiSanitizer, deps: [] },
    {
      provide: COMPILER_OPTIONS,
      useValue: {
        providers: [
          {
            provide: ElementSchemaRegistry,
            useClass: NodeguiElementSchemaRegistry,
            deps: []
          }
        ]
      },
      multi: true
    }
  ]
);
