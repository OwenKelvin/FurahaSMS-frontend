import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map, takeUntil, tap} from 'rxjs/operators';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {loadErrorMessagesFailure} from 'src/app/store/actions/error-message.actions';
import {subscribedContainerMixin} from '../../../shared/mixins/subscribed-container.mixin';

const checkPasswords = (group: FormGroup) => {
  const matchedPasswords = group.get('newPassword')?.value === group.get('newPasswordConfirmation')?.value;
  return matchedPasswords ? null : {passwordMismatch: true};
};

@Component({
  selector: 'app-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent extends subscribedContainerMixin() {
  passwordChangeForm: FormGroup = this.fb.group({
    token: [''],
    oldPassword: [''],
    newPassword: ['', [Validators.required]],
    newPasswordConfirmation: ['', [Validators.required]]
  }, {validators: [checkPasswords]});

  isSubmittingSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isSubmittingActions$: Observable<boolean> = this.isSubmittingSubject$.asObservable();
  showOldPasswordField$: Observable<any> = this.route.queryParams.pipe(
    map((params) => params.token),
    tap((token) => token ? this.passwordChangeForm.get('token')?.setValue(token) : ''),
    map((token) => !token),
    tap((showField) => {
      const c: FormControl = this.passwordChangeForm.get('oldPassword') as FormControl;
      if (showField) {
        c.setValidators([Validators.required]);
      } else {
        c.setValidators([]);
      }
    })
  );

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    super();
  }

  get showPasswordMismatch() {
    return this.passwordChangeForm.hasError('passwordMismatch') &&
      this.passwordChangeForm.get('newPassword')?.touched &&
      this.passwordChangeForm.get('newPassword')?.dirty &&
      this.passwordChangeForm.get('newPasswordConfirmation')?.touched &&
      this.passwordChangeForm.get('newPasswordConfirmation')?.dirty;
  }

  submitPasswordChangeForm() {

    this.isSubmittingSubject$.next(true);
    if (this.passwordChangeForm.valid) {

      combineLatest([
        this.route.queryParams.pipe(map(params => params.returnUrl)),
        this.authService.changePassword(this.passwordChangeForm.value)
      ]).pipe(takeUntil(this.destroyed$)).subscribe({
        next: this.passwordChangeSuccess,
        error: () => this.isSubmittingSubject$.next(false)
      });
    } else {
      this.passwordChangeForm.get('email')?.markAsTouched();
    }
  }

  passwordChangeSuccess = ([returnUrl]: any[]) => {
    returnUrl = returnUrl || '/dashboard';
    this.isSubmittingSubject$.next(false);
    this.store.dispatch(loadErrorMessagesFailure());
    this.router.navigate([returnUrl]).then();
  };
}
