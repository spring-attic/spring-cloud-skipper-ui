import {Component, OnInit} from '@angular/core';
import {PackageSearchService} from "./package-search.service";
import {Observable} from "rxjs/Observable";
import {PackageSummary} from "../../shared/model/package-summary";

@Component({
  selector: 'app-package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.css']
})
export class PackageSearchComponent implements OnInit {

  public searchName: string;

  public packageSummaries: PackageSummary[];

  constructor(private searchService: PackageSearchService) {
  }

  public ngOnInit() {
  }

  private searchByName(searchName: string) {
    this.searchService.searchByName(searchName).subscribe(data => {
        this.packageSummaries = data._embedded.packageSummaries;
      }
    );
  }

}
