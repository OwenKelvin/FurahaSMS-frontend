import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningCourseComponent } from './e-learning-course.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ELearningCourseComponent', () => {
  let component: ELearningCourseComponent;
  let fixture: ComponentFixture<ELearningCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ ELearningCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
