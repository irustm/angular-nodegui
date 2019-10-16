import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularNodeguiLibModule } from '../lib/angular-nodegui-lib.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AngularNodeguiLibModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
