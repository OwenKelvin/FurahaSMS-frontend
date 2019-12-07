import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import AppFormService from 'src/app/services/AppForm.service';
import AuthenticationService from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: { username?: string | null, password?: string | null };
  constructor(private authService: AuthenticationService, private fb: FormBuilder, private appFormService: AppFormService) { }

  ngOnInit() {
    this.errors = {
      password: null,
      username: null
    };
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  get username() {
    return this.loginForm.get('username') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  validateUsername() {
    this.errors.username = this.appFormService.getErrorMessage(this.username, 'Username');
  }
  validatePassword() {
    this.errors.password = this.appFormService.getErrorMessage(this.password, 'Password');
  }
  get usernameFieldClass() {
    const formControlClass = 'form-control';
    if (this.errors.username) {
      return `${formControlClass} is-invalid`;
    }
    return formControlClass;
  }
  get passwordFieldClass() {
    const formControlClass = 'form-control';
    if (this.errors.password) {
      return `${formControlClass} is-invalid`;
    }
    return formControlClass;
  }
  submitLogin() {

  }
}
