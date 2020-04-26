import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPasswordChangeComponent } from './login-password-change.component';

describe('LoginPasswordChangeComponent', () => {
  let component: LoginPasswordChangeComponent;
  let fixture: ComponentFixture<LoginPasswordChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPasswordChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
