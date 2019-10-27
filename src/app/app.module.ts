import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NodeguiLibModule } from '../lib/nodegui-lib.module';

@NgModule({
  declarations: [AppComponent],
  imports: [NodeguiLibModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
