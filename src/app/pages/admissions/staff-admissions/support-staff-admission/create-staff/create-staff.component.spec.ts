import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStaffComponent } from './create-staff.component';

describe('CreateStaffComponent', () => {
  let component: CreateStaffComponent;
  let fixture: ComponentFixture<CreateStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
