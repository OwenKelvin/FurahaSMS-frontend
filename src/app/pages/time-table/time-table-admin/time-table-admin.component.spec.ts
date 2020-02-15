import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableAdminComponent } from './time-table-admin.component';

describe('TimeTableAdminComponent', () => {
  let component: TimeTableAdminComponent;
  let fixture: ComponentFixture<TimeTableAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTableAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
