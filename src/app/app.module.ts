import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { NodeguiLibModule } from '../../projects/angular-nodegui/src/lib/nodegui-lib.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { GithubService } from './github.service';
import { NodeguiRouterModule } from '../../projects/angular-nodegui/src/lib/router/router.module';

const appRoutes: Routes = [{ path: 'hello', component: HelloComponent }];

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [
    NodeguiLibModule,
    HttpClientModule,
    NodeguiRouterModule.forRoot(appRoutes)
  ],
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
