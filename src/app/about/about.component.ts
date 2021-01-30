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

  }

}
