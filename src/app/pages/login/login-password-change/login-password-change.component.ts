import { Component, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadErrorMessagesFailure } from 'src/app/store/actions/error-message.actions';

@Component({
  selector: 'app-login-password-change',
  templateUrl: './login-password-change.component.html',
  styleUrls: ['./login-password-change.component.css']
})
export class LoginPasswordChangeComponent implements OnDestroy {

  checkPasswords = (group: FormGroup) => {
    const matchedPasswords = group.get('newPassword')?.value === group.get('newPasswordConfirmation')?.value;
    return matchedPasswords ? null : { newPasswordMismatch: true };
  };

  passwordChangeForm: FormGroup = this.fb.group({
    token: [''],
    oldPassword: [''],
    newPassword: ['', [Validators.required]],
    newPasswordConfirmation: ['', [Validators.required]]
  }, { validators: [this.checkPasswords] });

  isSubmittingSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isSubmittingActions$: Observable<boolean> = this.isSubmittingSubject$.asObservable();
  showOldPasswordField$: Observable<any> = this.route.queryParams.pipe(
    map((params) => params.token),
    tap((token) => token ? this.passwordChangeForm.get('token')?.setValue(token) : ''),
    map((token) => !token),
    tap((showField) => {
      const c: FormControl = this.passwordChangeForm.get('oldPassword') as FormControl;
      showField ? c.setValidators([Validators.required]) : c.setValidators([])
    })
  );
  componentIsActive: boolean =  true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) { }
  submitPasswordChangeForm() {

    this.isSubmittingSubject$.next(true);
    if (this.passwordChangeForm.valid) {
      
      combineLatest([
        this.route.queryParams.pipe(map(params => params.returnUrl)),
        this.authService.changePassword(this.passwordChangeForm.value)
      ]).subscribe({
          next: this.passwordChangeSuccess,
          error: () => this.isSubmittingSubject$.next(false)
        });
    } else {
      this.passwordChangeForm.get('email')?.markAsTouched();
    }
  }
  
  passwordChangeSuccess = ([returnUrl]: any[]) => {
    returnUrl = returnUrl || '/dashboard';
    this.isSubmittingSubject$.next(false)
    this.store.dispatch(loadErrorMessagesFailure());
    this.router.navigate([returnUrl]);
  };
  
  ngOnDestroy() {
    this.componentIsActive = false
  }

}
