import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ELearningCourseComponent } from './e-learning-course.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ELearningCourseComponent', () => {
  let component: ELearningCourseComponent;
  let fixture: ComponentFixture<ELearningCourseComponent>;

  beforeEach(waitForAsync(() => {
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
    component.course = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
