import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppFormService } from 'src/app/services/AppForm.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FullWithCenterComponent } from '../full-with-center/full-with-center.component';
@Component({
  selector: 'app-login-contact-admin',
  templateUrl: './login-contact-admin.component.html',
  styleUrls: ['./login-contact-admin.component.css']
})
export class LoginContactAdminComponent implements OnInit {
  loginContactAdminForm: FormGroup;
  errors: {
    email: string;
  };
  constructor(
    private fb: FormBuilder,
    private appFormService: AppFormService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.errors = {
      email: null
    };
    this.loginContactAdminForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get email() {
    return this.loginContactAdminForm.get('email') as FormControl;
  }
  validateEmail() {
    this.errors.email = this.appFormService.getErrorMessage(this.email, 'Email');
  }
  get emailFieldClass() {
    const formControlClass = 'form-control';
    if (this.errors.email) {
      return `${formControlClass} is-invalid`;
    }
    return formControlClass;
  }
  submitLoginContactAdminForm() {
    if (this.loginContactAdminForm.valid) {
      this.authService.contactAdmin({email: this.email.value}).subscribe((success) => {
        alert(success.message);
      });
    } else {
      this.email.markAsTouched();
      this.validateEmail();
    }
  }
  updateEmailFieldValidation() {
    if (this.errors.email) {
      this.validateEmail();
    }
  }
}
