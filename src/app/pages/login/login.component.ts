import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppFormService } from 'src/app/services/AppForm.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageInterface } from 'src/app/interfaces/message.interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadToastShowsSuccess } from '../../store/actions/toast-show.actions';
import { AppState } from '../../store/reducers';
import { takeWhile } from 'rxjs/operators';
import { loadErrorMessagesFailure } from 'src/app/store/actions/error-message.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  errors: { username?: string | null, password?: string | null };
  triggerValidation: boolean;
  submitInProgress: boolean;
  showErrorMessage: boolean;
  submitError: MessageInterface;
  componentIsActive: boolean;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private appFormService: AppFormService) { }
  ngOnInit() {
    this.componentIsActive = true;
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
      const username: string = this.username.value;
      const password: string = this.password.value;
      this.authService.login({ username, password })
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe({
          next: () => {
            this.submitInProgress = false;
            this.store.dispatch(loadErrorMessagesFailure());
            this.store.dispatch(loadToastShowsSuccess({
              toastHeader: 'Login Successful!',
              toastBody: 'Successfully authenticated',
              showMessage: true,
              toastTime: 'Just Now'
            }));
            this.router.navigate(['/dashboard']);
          },
          error: error => {
          this.submitInProgress = false;
          this.submitError = error as MessageInterface;
          this.showErrorMessage = true;
        }});
    } else {
      this.password.markAsTouched();
      this.username.markAsTouched();
      this.triggerValidation = !this.triggerValidation;
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
