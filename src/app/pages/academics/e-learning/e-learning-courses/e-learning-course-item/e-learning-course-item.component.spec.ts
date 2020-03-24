import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningCourseItemComponent } from './e-learning-course-item.component';

describe('ELearningCourseItemComponent', () => {
  let component: ELearningCourseItemComponent;
  let fixture: ComponentFixture<ELearningCourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELearningCourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
