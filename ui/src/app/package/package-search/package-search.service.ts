import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {PackageSummary} from "../../shared/model/package-summary";

@Injectable()
export class PackageSearchService {

  private packageSearchService = '/packageSummaries/search/findByName';

  constructor(public http: Http) {
  }

  public searchByName(searchName: string): Observable<any> {
    let params = {};
    params['name'] = searchName;
    return this.http.get(this.packageSearchService, {params: params})
      .map(this.extractData.bind(this))
      .catch(this.handleError);
  }

  private extractData(result: Response): any {
    return result.json();
  }

  private handleError(error: Response | any) {
    let errMsg: string = '';

    if (error instanceof Response) {
      const body = error.json() || '';
      let isFirst: boolean = true;
      for (let bodyElement of body) {
        if (!isFirst) {
          errMsg += '\n';
        }
        else {
          isFirst = false;
        }
        errMsg += bodyElement.message;
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
