import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NodeguiLibModule } from '../lib/nodegui-lib.module';
import { HelloComponent } from './hello/hello.component';
import { GithubService } from './github.service';
import { HttpFetchBackend } from '../lib/http-fetch-backend';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [NodeguiLibModule, HttpClientModule],
  providers: [
    GithubService
    // {
    //   provide: HttpClient,
    //   useFactory: () => new HttpClient(new HttpFetchBackend()) // TODO: not work
    // }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
