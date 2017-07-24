import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PackageSummaryComponent} from "./package/package-summary/package-summary.component";
import {PackageSearchComponent} from "./package/package-search/package-search.component";

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/summary'
  },
  {
    path: 'summary',
    component: PackageSummaryComponent
  },
  {
    path: 'search',
    component: PackageSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

