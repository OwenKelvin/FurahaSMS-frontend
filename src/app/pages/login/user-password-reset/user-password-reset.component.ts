import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap, tap} from 'rxjs/operators';
import {formMixin} from '../../../shared/mixins/form.mixin';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-user-password-reset',
  templateUrl: './user-password-reset.component.html',
  styleUrls: ['./user-password-reset.component.css']
})
export class UserPasswordResetComponent extends formMixin() {
  routeId$ = this.route.parent?.parent?.parent?.paramMap.pipe(map(params => Number(params.get('id'))));

  passwordResetForm = this.fb.group({
    resetPassword: ['Manager1', Validators.required]
  });

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userService: UsersService) {
    super();
  }

  submitPasswordReset = () => {
    this.submitInProgressSubject$.next(true);
    this.routeId$?.pipe(
      mergeMap(id =>
        this.userService.resetPasswordForUserWithId({
          id, resetPassword: this.passwordResetForm.get('resetPassword')?.value
        })),
      tap(() => this.submitInProgressSubject$.next(false))
    ).subscribe({error: () => this.submitInProgressSubject$.next(false)});
  };
}
