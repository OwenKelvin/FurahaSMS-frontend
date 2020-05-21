import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableAcademicYearViewComponent } from './time-table-academic-year-view.component';

describe('TimeTableAcademicYearViewComponent', () => {
  let component: TimeTableAcademicYearViewComponent;
  let fixture: ComponentFixture<TimeTableAcademicYearViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTableAcademicYearViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableAcademicYearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
