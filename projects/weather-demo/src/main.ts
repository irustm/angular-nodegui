import '../../angular-nodegui/src/lib/reflect';
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { platformNodeguiDynamic } from '../../angular-nodegui/src/lib/platform-dynamic';

enableProdMode();

platformNodeguiDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
