import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableAcademicYearDashboardComponent } from './time-table-academic-year-dashboard.component';

describe('TimeTableAcademicYearDashboardComponent', () => {
  let component: TimeTableAcademicYearDashboardComponent;
  let fixture: ComponentFixture<TimeTableAcademicYearDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTableAcademicYearDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableAcademicYearDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
