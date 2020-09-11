import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeacherSubjectComponent } from './manage-teacher-subject.component';

describe('ManageTeacherSubjectComponent', () => {
  let component: ManageTeacherSubjectComponent;
  let fixture: ComponentFixture<ManageTeacherSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeacherSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeacherSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
