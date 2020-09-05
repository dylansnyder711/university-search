import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { University } from './university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService implements OnInit, OnDestroy{
  API_URL = 'https://api.data.gov/ed/collegescorecard/v1/schools?api_key=PIOQeDUt30iXBdYCG4I9Yp6uuQgByKlANtbsoHmu';
  private resultsUpdated = new Subject<any>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  getResultsUpdateListener() {
    return this.resultsUpdated.asObservable();
  }

  setResults(formFields: any) {
    let paramList: string = '&per_page=100&fields=school.name,school.city,school.state';
    if(formFields.name) {
      paramList += '&school.name=' + formFields.name;
    }
    if(formFields.state) {
      paramList += '&school.state=' + formFields.state;
    }
    if(formFields.city) {
      paramList += '&school.city=' + formFields.city;
    }
    this.getApiList(paramList)
      .subscribe((data) => {
        let searchList = [];
        for(let result of data.results){
          const university: University = {
            name: Object.values(result)[0] as string,
            city: Object.values(result)[1] as string,
            state: Object.values(result)[2] as string
          };
          searchList.push(university);
        }
        this.resultsUpdated.next([...searchList]);
      });
  }

  getApiList(params?: string) {
    return this.http.get<any>(
      this.API_URL + params
    );
  }

  ngOnDestroy() {
  }
}
