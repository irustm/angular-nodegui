import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NodeguiLibModule } from '../../../../projects/angular-nodegui/src/lib/nodegui-lib.module';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { TemeratureComponent } from './temerature/temerature.component';
import { PlacedateComponent } from './placedate/placedate.component';

@NgModule({
  declarations: [AppComponent, SummaryComponent, TemeratureComponent, PlacedateComponent],
  imports: [NodeguiLibModule, HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
