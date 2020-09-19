import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseContentItemComponent } from './edit-course-content-item.component';

describe('EditCourseContentItemComponent', () => {
  let component: EditCourseContentItemComponent;
  let fixture: ComponentFixture<EditCourseContentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourseContentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
