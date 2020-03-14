import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupportStaffInfoComponent } from './view-support-staff-info.component';

describe('ViewSupportStaffInfoComponent', () => {
  let component: ViewSupportStaffInfoComponent;
  let fixture: ComponentFixture<ViewSupportStaffInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSupportStaffInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupportStaffInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
