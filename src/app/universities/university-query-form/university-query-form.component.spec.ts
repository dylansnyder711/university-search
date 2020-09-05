import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityQueryFormComponent } from './university-query-form.component';

describe('UniversityQueryFormComponent', () => {
  let component: UniversityQueryFormComponent;
  let fixture: ComponentFixture<UniversityQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
