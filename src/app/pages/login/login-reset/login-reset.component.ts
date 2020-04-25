import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EmailValidatorDirective } from 'src/app/shared/validators/email.validator';

@Component({
  selector: 'app-login-reset',
  templateUrl: './login-reset.component.html',
  styleUrls: ['./login-reset.component.css']
})
export class LoginResetComponent {
  passwordResetForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, new EmailValidatorDirective()]]
  });
  errors: { email: string | null; } = { email: null };
  constructor(
    private fb: FormBuilder,
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
    }
  }
}
