import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContactAdminComponent } from './login-contact-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullWithCenterComponent } from '../full-with-center/full-with-center.component';
import { By } from '@angular/platform-browser';

describe('LoginContactAdminComponent', () => {
  let component: LoginContactAdminComponent;
  let fixture: ComponentFixture<LoginContactAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ LoginContactAdminComponent, FullWithCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContactAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have as function validateEmail', () => {
    component.validateEmail();
    expect(component).toBeTruthy();
  });
  it('should have emailFieldClass property containing "is-invalid" if invalid email', () => {
    component.errors.email = 'Email Error';
    fixture.detectChanges();
    expect(component.emailFieldClass).toContain('is-invalid');
  });
  it('should have function updateEmailFieldValidation', () => {
    component.errors.email = 'Email Error';
    fixture.detectChanges();
    component.updateEmailFieldValidation();
    expect(component).toBeTruthy();

    component.errors.email = null;
    fixture.detectChanges();
    component.updateEmailFieldValidation();
    expect(component).toBeTruthy();
  });
  it('should have as function submitLoginContactAdminForm', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    const formElement = fixture.debugElement.query(By.css('form'));
    formElement.triggerEventHandler('submit', null);
    fixture.detectChanges();
    component.submitLoginContactAdminForm();
    expect(component).toBeTruthy();
    component.loginContactAdminForm.get('email').setValue('admin@admin.com');
    fixture.detectChanges();
    component.submitLoginContactAdminForm();
  });
});
