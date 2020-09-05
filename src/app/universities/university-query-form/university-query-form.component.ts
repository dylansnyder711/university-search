import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UniversitiesService } from '../universities.service';

@Component({
  selector: 'app-university-query-form',
  templateUrl: './university-query-form.component.html',
  styleUrls: ['./university-query-form.component.css']
})
export class UniversityQueryFormComponent implements OnInit {
  universityForm: FormGroup;
  states: string[] = [
    'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA',
    'ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK',
    'OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
  ];

  constructor(private universitiesService: UniversitiesService) { }

  ngOnInit() {
    this.universityForm = new FormGroup({
      name: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null)
    });
  }

  onSubmit() {
    this.universitiesService.setResults({
      name: this.universityForm.value.name,
      city: this.universityForm.value.city,
      state: this.universityForm.value.state
    });
  }
}
