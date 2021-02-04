import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditTeacherComponent } from './edit-teacher.component';

describe('EditTeacherComponent', () => {
  let component: EditTeacherComponent;
  let fixture: ComponentFixture<EditTeacherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
