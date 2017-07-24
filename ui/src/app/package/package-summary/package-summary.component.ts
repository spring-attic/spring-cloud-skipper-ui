import { Component, OnInit } from '@angular/core';
import {PackageSummaryService} from "./package-summary.service";
import {PackageSummary} from "../../shared/model/package-summary";

@Component({
  selector: 'app-package-summary',
  templateUrl: './package-summary.component.html'})
export class PackageSummaryComponent implements OnInit {

  public packageSummaries: PackageSummary[]

  constructor(private packageSummaryService: PackageSummaryService) { }

  ngOnInit() {
    this.packageSummaryService.getPackageSummaries().subscribe(data => {
      this.packageSummaries = data._embedded.packageSummaries;
    });
  }

}
