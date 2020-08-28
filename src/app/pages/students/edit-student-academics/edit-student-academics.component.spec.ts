import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentAcademicsComponent } from './edit-student-academics.component';

describe('EditStudentAcademicsComponent', () => {
  let component: EditStudentAcademicsComponent;
  let fixture: ComponentFixture<EditStudentAcademicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudentAcademicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentAcademicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
