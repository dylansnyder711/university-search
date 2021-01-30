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

  }
}
