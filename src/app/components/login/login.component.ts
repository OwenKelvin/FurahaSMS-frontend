import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import AppFormService from 'src/app/services/AppForm.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: { username?: string | null, password?: string | null };
  constructor(private fb: FormBuilder, private appFormService: AppFormService) { }

  ngOnInit() {
    this.errors = {
      password: null,
      username: null
    }
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  validateUsername() {
    const formControl = this.loginForm.get('username') as FormControl;
    this.errors.username = this.appFormService.getErrorMessage(formControl, 'Username');
  }
  validatePassword() {
    const formControl = this.loginForm.get('password') as FormControl;
    this.errors.password = this.appFormService.getErrorMessage(formControl, 'Password');
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
}
