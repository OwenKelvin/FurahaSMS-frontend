import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCourseContentItemComponent } from './delete-course-content-item.component';

describe('DeleteCourseContentItemComponent', () => {
  let component: DeleteCourseContentItemComponent;
  let fixture: ComponentFixture<DeleteCourseContentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCourseContentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCourseContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
