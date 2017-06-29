import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { sharedApiService } from './sharedServices/sharedServices';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';
import { FilterbynameComponent } from './filterbyname/filterbyname.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    SearchComponent,
    FilterbynameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'agenda', pathMatch: 'full'},
      { path: 'agenda', component: HomepageComponent},
      { path: 'filterByDateAndName', component: SearchComponent},
      { path: 'filterByName', component: FilterbynameComponent} // NEED TO CHANGE COMPONENT
    ])
  ],
  providers: [sharedApiService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
