import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningCoursesComponent } from './e-learning-courses.component';

describe('ELearningCoursesComponent', () => {
  let component: ELearningCoursesComponent;
  let fixture: ComponentFixture<ELearningCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELearningCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
