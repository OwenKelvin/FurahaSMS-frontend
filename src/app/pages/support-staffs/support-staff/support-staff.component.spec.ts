import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SupportStaffComponent } from './support-staff.component';

describe('SupportStaffComponent', () => {
  let component: SupportStaffComponent;
  let fixture: ComponentFixture<SupportStaffComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
