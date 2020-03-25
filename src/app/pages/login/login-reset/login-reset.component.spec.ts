import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginResetComponent } from './login-reset.component';
import { InputComponent } from '../../../components/input/input.component';
import { FullWithCenterComponent } from '../../../components/full-with-center/full-with-center.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginResetComponent', () => {
  let component: LoginResetComponent;
  let fixture: ComponentFixture<LoginResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ LoginResetComponent, FullWithCenterComponent, InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginResetComponent);
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
  it('should have as function submitPasswordResetForm', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    const formElement = fixture.debugElement.query(By.css('form'));
    formElement.triggerEventHandler('submit', null);
    fixture.detectChanges();
    component.submitPasswordResetForm();
    expect(component).toBeTruthy();
    (component.passwordResetForm.get('email') as FormControl).setValue('admin@admin.com');
    fixture.detectChanges();
    component.submitPasswordResetForm();
  });
});
