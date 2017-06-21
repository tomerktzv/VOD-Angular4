import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    HomepageComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'agenda', pathMatch: 'full'},
      { path: 'agenda', component: HomepageComponent},
      { path: 'search', component: SearchComponent},
      { path: 'page2', component: HomepageComponent},
      { path: 'page3', component: HomepageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
