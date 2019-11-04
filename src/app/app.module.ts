import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NodeguiLibModule } from '../../projects/angular-nodegui/src/lib/nodegui-lib.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { GithubService } from './github.service';

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
