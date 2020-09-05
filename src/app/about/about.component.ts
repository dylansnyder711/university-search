import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from '../universities/universities.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private universityService: UniversitiesService) { }

  ngOnInit(): void {
    this.universityService.getApiList('&school.name=Nebraska%20University&fields=latest.academics&per_page=1')
    .subscribe((data) => {
      var filtered = data.results[0];
      for (var prop in filtered) {
        if(filtered[prop] === null || filtered[prop] === 0 || filtered[prop] === undefined) {
          delete filtered[prop];
        }
      }
      console.log(filtered);
    });
  }

}
