import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupportStaffRolesComponent } from './view-support-staff-roles.component';

describe('ViewSupportStaffRolesComponent', () => {
  let component: ViewSupportStaffRolesComponent;
  let fixture: ComponentFixture<ViewSupportStaffRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSupportStaffRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupportStaffRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
