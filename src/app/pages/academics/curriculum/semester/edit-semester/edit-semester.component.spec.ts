import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSemesterComponent } from './edit-semester.component';

describe('EditSemesterComponent', () => {
  let component: EditSemesterComponent;
  let fixture: ComponentFixture<EditSemesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSemesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
