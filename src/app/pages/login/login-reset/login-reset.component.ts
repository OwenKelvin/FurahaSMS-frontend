import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EmailValidatorDirective } from 'src/app/shared/validators/email.validator';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reset',
  templateUrl: './login-reset.component.html',
  styleUrls: ['./login-reset.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginResetComponent {
  passwordResetForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, new EmailValidatorDirective()]]
  });
  isSubmittingSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isSubmittingActions$: Observable<boolean> = this.isSubmittingSubject$.asObservable();
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  submitPasswordResetForm() {
    
    this.isSubmittingSubject$.next(true)
    if (this.passwordResetForm.valid) {
      this.authService.resetPassword(this.passwordResetForm.value)
        .subscribe({
          next: () => {
            this.router.navigate(['/login', 'token'], {queryParamsHandling: 'preserve'})
            this.isSubmittingSubject$.next(false)
          },
          error: () => this.isSubmittingSubject$.next(false)
        });
    } else {
      this.passwordResetForm.get('email')?.markAsTouched();
    }
  }
}
