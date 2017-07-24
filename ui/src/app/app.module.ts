import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routing";
import {HttpModule} from "@angular/http";
import {PackageSummaryService} from "./package/package-summary/package-summary.service";
import {PackageSearchService} from "./package/package-search/package-search.service";
import {PackageSummaryComponent} from "./package/package-summary/package-summary.component";
import {PackageSearchComponent} from "./package/package-search/package-search.component";

@NgModule({
  declarations: [
    AppComponent,
    PackageSummaryComponent,
    PackageSearchComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PackageSummaryService,
    PackageSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
