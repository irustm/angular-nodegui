import './lib/reflect';
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformNodeguiDynamic } from './lib/platform';

if (environment.production) {
  enableProdMode();
}

platformNodeguiDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
