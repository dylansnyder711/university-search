import { Component, OnInit } from '@angular/core';

import { UniversitiesService } from '../universities/universities.service';

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.css']
})
export class MajorsComponent implements OnInit {

  constructor(private universitiesService: UniversitiesService) { }

  ngOnInit() {
    this.universitiesService.getApiList('&school.name=Nebraska%20University&per_page=1')
    .subscribe((data) => {
      console.log(data);
    });
  }
}
