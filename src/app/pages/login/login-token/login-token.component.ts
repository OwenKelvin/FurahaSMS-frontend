import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable, timer, from, of, combineLatest } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { map, takeWhile, tap, filter } from 'rxjs/operators';

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
  componentIsActive: boolean = true;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) { }

  submitTokenLoginForm() {

    this.isSubmittingSubject$.next(true);
    if (this.tokenLoginForm.valid) {
      this.authService.tokenLogin(this.tokenLoginForm.value).pipe(
        takeWhile(() => this.componentIsActive)
      ).subscribe({
          next: () => this.isSubmittingSubject$.next(false),
          error: () => this.isSubmittingSubject$.next(false)
        });
    } else {
      this.tokenLoginForm.get('email')?.markAsTouched();
    }
  }
  
  ngOnInit() {
    let clipboardTextSubject$ = new BehaviorSubject('');
    let clipboardTextAction$ = clipboardTextSubject$.asObservable()
    this.clipBoardChange$.pipe(
      tap(() =>
        navigator
          .clipboard
          .readText()
          .then(success => clipboardTextSubject$.next(success))
          .catch(() => {})
      )
    ).subscribe();
    clipboardTextAction$.pipe(
      filter(() => this.tokenLoginForm.get('token')?.value === ''),
      filter(res => this.tokenLoginForm.get('token')?.value !== res),
      filter(res => /^[a-zA-Z0-9]{50}$/.test(res)),
      tap(res => this.tokenLoginForm.get('token')?.setValue(res)),
      tap(() => this.tokenLoginForm.markAsDirty())
    ).subscribe()
  }
  ngOnDestroy() {
    this.componentIsActive = false
  }
}
