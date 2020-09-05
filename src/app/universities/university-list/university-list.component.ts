import { Component, OnInit, OnDestroy } from '@angular/core';

import { University } from '../university.model';
import { UniversitiesService } from '../universities.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit, OnDestroy {
  private university: University;
  universities: University[] = [];
  private universitySub: Subscription;

  constructor(private universitiesService: UniversitiesService) { }

  ngOnInit() {
    this.universitySub = this.universitiesService.getResultsUpdateListener()
      .subscribe((universities: University[]) => {
        this.universities = universities;
      });
  }

  ngOnDestroy() {
    this.universitySub.unsubscribe();
  }

}
