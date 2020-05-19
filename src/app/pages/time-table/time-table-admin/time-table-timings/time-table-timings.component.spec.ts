import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableTimingsComponent } from './time-table-timings.component';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('TimeTableTimingsComponent', () => {
  let component: TimeTableTimingsComponent;
  let fixture: ComponentFixture<TimeTableTimingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot()
      ],
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
