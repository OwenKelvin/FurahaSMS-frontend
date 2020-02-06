import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuardianStudentsComponent } from './view-guardian-students.component';

describe('ViewGuardianStudentsComponent', () => {
  let component: ViewGuardianStudentsComponent;
  let fixture: ComponentFixture<ViewGuardianStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGuardianStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuardianStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
