import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { University } from './university.model';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService implements OnInit, OnDestroy{
  private resultsUpdated = new Subject<any>();

  constructor(private http: HttpClient, private apiService: ApiService) {}

  ngOnInit() {
  }

  getResultsUpdateListener() {
    return this.resultsUpdated.asObservable();
  }

  setResults(formFields: any) {
    let paramList: string = '&per_page=20&fields=school.name,school.city,school.state';
    console.log('name: ' + formFields.name);
    formFields.name ? paramList += '&school.name=' + formFields.name : paramList += '';
    formFields.state ? paramList += '&school.state=' + formFields.state : paramList += '';
    formFields.city ? paramList += '&school.city=' + formFields.city : paramList += '';

    console.log(paramList);
    this.apiService.getApiList(paramList)
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

  ngOnDestroy() {
  }
}
