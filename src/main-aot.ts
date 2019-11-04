import './lib/reflect';
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformNodeguiStatic } from '../projects/angular-nodegui/src/lib/platform-static';

if (environment.production) {
  enableProdMode();
}

platformNodeguiStatic()
  .bootstrapModuleFactory(AppModule as any)
  .catch(err => console.error(err));
