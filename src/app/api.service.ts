import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { environment } from '../environments/environment';
import { Academics } from './majors/academics.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnDestroy{
  private resultsUpdated = new Subject<any>();
  currentResult: any = null;

  constructor(private http: HttpClient) { }

  formatSearch(formFields: any) {
    let paramList: string = '&per_page=1&fields=school.name,school.city,school.state';

    formFields.name ? paramList += '&school.name=' + formFields.name : paramList += '';
    formFields.state ? paramList += '&school.state=' + formFields.state : paramList += '';
    formFields.city ? paramList += '&school.city=' + formFields.city : paramList += '';
  }

  //Return api observable
  getApiList(params?: string) {
    return this.http.get<any>(
      environment.API_URL + params
    );
  }

  //Set currentResult to api result data
  setCurrentResult(params?: string) {
    this.getApiList().subscribe(data => {
      this.currentResult = data;
    });
  }

  getResultsUpdateListener() {
    return this.resultsUpdated.asObservable();
  }

  ngOnDestroy() {
    this.currentResult = null;
  }

}
