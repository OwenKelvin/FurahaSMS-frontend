import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppFormService } from 'src/app/services/AppForm.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageInterface } from 'src/app/interfaces/message.interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadToastShowsSuccess } from '../../store/actions/toast-show.actions';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: { username?: string | null, password?: string | null };
  triggerValidation: boolean;
  submitInProgress: boolean;
  showErrorMessage: boolean;
  submitError: MessageInterface;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private appFormService: AppFormService) { }
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
  submitLoginForm() {
    this.submitInProgress = true;
    if (this.loginForm.valid) {
      const username: string = this.username.value ;
      const password: string = this.password.value ;
      this.authService.login({ username, password })
        .subscribe(success => {
          this.submitInProgress = false;
          this.store.dispatch(loadToastShowsSuccess({
            toastHeader: 'Login Successful!',
            toastBody: 'Successfully authenticated'
          }));
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.submitInProgress = false;
          this.submitError = error as MessageInterface;
          this.showErrorMessage = true;
        });
    } else {
      this.password.markAsTouched();
      this.username.markAsTouched();
      this.triggerValidation = !this.triggerValidation;
    }
  }
}
