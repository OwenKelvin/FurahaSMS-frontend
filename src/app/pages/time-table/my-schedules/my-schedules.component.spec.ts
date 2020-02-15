import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySchedulesComponent } from './my-schedules.component';

describe('MySchedulesComponent', () => {
  let component: MySchedulesComponent;
  let fixture: ComponentFixture<MySchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
