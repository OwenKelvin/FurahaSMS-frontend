import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ELearningCoursesComponent} from './e-learning-courses.component';
import {ELearningCourseModule} from '../e-learning-course/e-learning-course.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ELearningCoursesComponent', () => {
  let component: ELearningCoursesComponent;
  let fixture: ComponentFixture<ELearningCoursesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ELearningCourseModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        FormsModule,
        HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [ELearningCoursesComponent]
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
