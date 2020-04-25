import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageInterface } from 'src/app/interfaces/message.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadToastShowsSuccess } from '../../store/actions/toast-show.actions';
import { AppState } from '../../store/reducers';
import { takeWhile, tap, map } from 'rxjs/operators';
import { loadErrorMessagesFailure, loadErrorMessagesSuccess } from 'src/app/store/actions/error-message.actions';
import { Subject, combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  triggerValidation: boolean;
  isSubmitting: boolean;
  submitError: MessageInterface;
  componentIsActive: boolean = true;

  inputSubmittedSubject$ = new Subject();
  inputSubmittedAction$ = this.inputSubmittedSubject$.asObservable();
  inputValid$ = this.loginForm.valueChanges.pipe(
    map(() => this.loginForm.valid),
    tap(() => this.inputSubmittedSubject$.next(false))
  );
  submitButtonActive$: Observable<any> = combineLatest([
    this.inputSubmittedAction$,
    this.inputValid$
  ]).pipe(
    map(([submitted, inputChange]) => {
      return !submitted && inputChange;
    }),
  );
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) { }

  get username() {
    return this.loginForm.get('username') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  submitLoginForm() {
    this.inputSubmittedSubject$.next(true);
    this.isSubmitting = true;
    if (this.loginForm.valid) {
      combineLatest([
        this.route.queryParams.pipe(map(params => params.returnUrl)),
        this.authService.login(this.loginForm.value)
      ]).pipe(
        takeWhile(() => this.componentIsActive),
      ).subscribe({
        next: ([returnUrl]) => {
          returnUrl = returnUrl || '/dashboard';
          this.isSubmitting = false;
          this.store.dispatch(loadErrorMessagesFailure());
          this.store.dispatch(loadToastShowsSuccess({
            toastHeader: 'Login Successful!',
            toastBody: 'Successfully authenticated',
            showMessage: true,
            toastTime: 'Just Now'
          }));
          this.route.queryParams.pipe(map(params => params.returnUrl)).subscribe({
            next: (res) => console.log(res)
          });
          this.router.navigate([returnUrl]);
        },
        error: error => {
          this.store.dispatch(loadErrorMessagesSuccess(error));
          this.isSubmitting = false;
        }
      });
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
