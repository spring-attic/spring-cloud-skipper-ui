import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PackageSummaryService {

  private packageSummariesURL = '/packageSummaries';

  constructor(private http: Http) {
  }

  public getPackageSummaries(): Observable<any> {

    return this.http.get(this.packageSummariesURL)
      .map(this.extractData.bind(this));
  }

  private extractData(result: Response): any {
    return result.json();
  }

}
