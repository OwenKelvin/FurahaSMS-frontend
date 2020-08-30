import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable, timer} from 'rxjs';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {filter, takeWhile, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {loadToastShowsSuccess} from 'src/app/store/actions/toast-show.actions';

@Component({
  selector: 'app-login-token',
  templateUrl: './login-token.component.html',
  styleUrls: ['./login-token.component.css']
})
export class LoginTokenComponent implements OnInit, OnDestroy {

  tokenLoginForm: FormGroup = this.fb.group({
    token: ['', [Validators.required]]
  });
  isSubmittingSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isSubmittingActions$: Observable<boolean> = this.isSubmittingSubject$.asObservable();
  clipBoardChange$: Observable<any> = timer(500, 500);
  componentIsActive = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private store: Store
  ) {
  }

  submitTokenLoginForm() {

    this.isSubmittingSubject$.next(true);
    if (this.tokenLoginForm.valid) {
      this.authService.tokenLogin(this.tokenLoginForm.value).pipe(
        takeWhile(() => this.componentIsActive)
      ).subscribe({
        next: ({token}: { token: string }) => {
          this.isSubmittingSubject$.next(false);
          this.router.navigate(['/login/password-change'], {queryParams: {token}, queryParamsHandling: 'merge'});
          this.store.dispatch(loadToastShowsSuccess({
            toastHeader: 'Login Successful!',
            toastBody: 'Successfully authenticated',
            showMessage: true,
            toastTime: 'Just Now'
          }));
        },
        error: () => this.isSubmittingSubject$.next(false)
      });
    } else {
      this.tokenLoginForm.get('email')?.markAsTouched();
    }
  }

  ngOnInit() {
    const clipboardTextSubject$ = new BehaviorSubject('');
    const clipboardTextAction$ = clipboardTextSubject$.asObservable();
    this.clipBoardChange$.pipe(
      tap(() =>
        navigator
          .clipboard
          .readText()
          .then(success => clipboardTextSubject$.next(success))
          .catch(() => {
          })
      )
    ).subscribe();
    clipboardTextAction$.pipe(
      filter(() => this.tokenLoginForm.get('token')?.value === ''),
      filter(res => this.tokenLoginForm.get('token')?.value !== res),
      filter(res => /^[a-zA-Z0-9]{50}$/.test(res)),
      tap(res => this.tokenLoginForm.get('token')?.setValue(res)),
      tap(() => this.tokenLoginForm.markAsDirty())
    ).subscribe();
  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
