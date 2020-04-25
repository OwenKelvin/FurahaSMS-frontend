import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppFormService } from 'src/app/services/AppForm.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-reset',
  templateUrl: './login-reset.component.html',
  styleUrls: ['./login-reset.component.css']
})
export class LoginResetComponent {
  passwordResetForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
  errors: { email: string | null; } = { email: null };
  constructor(
    private fb: FormBuilder,
    private appFormService: AppFormService,
    private authService: AuthenticationService
  ) {}

  get email() {
    return this.passwordResetForm.get('email') as FormControl;
  }
  submitPasswordResetForm() {
    if (this.passwordResetForm.valid) {
      this.authService.resetPassword(this.passwordResetForm.value)
        .subscribe();
    } else {
      this.email.markAsTouched();
      this.appFormService.getErrorMessage(this.email, 'Email');
    }
  }
  updateEmailFieldValidation() {
    if (this.errors.email) {
      this.appFormService.getErrorMessage(this.email, 'Email');
      this.appFormService.getErrorMessage(this.email, 'Email');
    }
  }
}
