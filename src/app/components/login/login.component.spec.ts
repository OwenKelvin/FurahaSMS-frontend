import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FullWithCenterComponent } from '../full-with-center/full-with-center.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [LoginComponent, FullWithCenterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as functions validateUsername', () => {
    component.validateUsername();
    expect(component).toBeTruthy();
  });
  it('should have as functions validatePassword', () => {
    component.validatePassword();
    expect(component).toBeTruthy();
  });
  it('should have passwordFieldClass contain is-invalid if password has error', () => {
    component.errors.password = 'Error Text';
    fixture.detectChanges();
    expect(component.passwordFieldClass).toContain('is-invalid');
  });
  it('should have usernameFieldClass contain is-invalid if username has error', () => {
    component.errors.username = 'Error Text';
    fixture.detectChanges();
    expect(component.usernameFieldClass).toContain('is-invalid');
  });
  it('should have as functions submitLogin', () => {
    component.submitLogin();
    expect(component).toBeTruthy();
  });
});
