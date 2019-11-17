import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { NodeguiLibModule } from '../../projects/angular-nodegui/src/lib/nodegui-lib.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { GithubService } from './github.service';
import { NodeguiRouterModule } from '../../projects/angular-nodegui/src/lib/router/router.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [AppComponent, HelloComponent, HomeComponent, AboutComponent],
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
