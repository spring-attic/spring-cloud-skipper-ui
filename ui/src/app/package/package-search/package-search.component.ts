import {Component, OnInit} from '@angular/core';
import {PackageSearchService} from './package-search.service';
import {PackageSummary} from '../../shared/model/package-summary';

@Component({
  selector: 'app-package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.css']
})
export class PackageSearchComponent implements OnInit {

  public searchName: string;

  public packageMetadata: PackageSummary[];

  constructor(private searchService: PackageSearchService) {
  }

  public ngOnInit() {
  }

  searchByName(searchName: string) {
    this.searchService.searchByName(searchName).subscribe(data => {
        this.packageMetadata = data._embedded.packageMetadata;
      }
    );
  }

}
