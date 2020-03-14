import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupportStaffComponent } from './view-support-staff.component';

describe('ViewSupportStaffComponent', () => {
  let component: ViewSupportStaffComponent;
  let fixture: ComponentFixture<ViewSupportStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSupportStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupportStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
