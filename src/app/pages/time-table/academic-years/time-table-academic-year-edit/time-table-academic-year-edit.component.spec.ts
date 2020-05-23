import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableAcademicYearEditComponent } from './time-table-academic-year-edit.component';

describe('TimeTableAcademicYearEditComponent', () => {
  let component: TimeTableAcademicYearEditComponent;
  let fixture: ComponentFixture<TimeTableAcademicYearEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTableAcademicYearEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableAcademicYearEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
