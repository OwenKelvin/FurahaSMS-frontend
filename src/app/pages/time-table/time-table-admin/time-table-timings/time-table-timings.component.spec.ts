import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableTimingsComponent } from './time-table-timings.component';

describe('TimeTableTimingsComponent', () => {
  let component: TimeTableTimingsComponent;
  let fixture: ComponentFixture<TimeTableTimingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTableTimingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
