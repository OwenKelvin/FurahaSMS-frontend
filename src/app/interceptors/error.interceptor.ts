import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageInterface } from './../interfaces/message.interface';
import { AppState } from '../store/reducers';
import { loadErrorMessagesSuccess } from '../store/actions/error-message.actions';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private message: MessageInterface;
  constructor(
    private store: Store<AppState>,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      let helperMessage = '';
      if (typeof err.error === 'string') {
        helperMessage = err.error;
      } else if (typeof err.message === 'string') {
        helperMessage = err.message;
      } else {
        helperMessage = err.error.message;
      }
      const error = err.statusText || err.error.message;
      if (err.status === 0) {
        this.message = {
          message: err.statusText,
          type: 'error',
          status: err.status,
          help: helperMessage
        };
      }
      if (err.status === 500) {

        this.message = {
          message: err.statusText,
          type: 'error',
          status: err.status,
          help:  helperMessage
        };
      }
      if (err.status === 422) {
        this.message = {
          message: err.statusText + ': ' + err.error.message,
          type: 'error',
          status: err.status,
          help: Object.values(err.error.errors).join(', ')
        };
      }
      if (err.status === 404) {
        this.message = {
          message: err.statusText,
          type: 'error',
          status: err.status,
          help: 'The URl "' + err.url + '" is invalid, If this is an error kindly contact the admin'
        };
      }
      if (err.status === 403) {
        this.message = {
          message: err.statusText + ': ' + err.error.message,
          type: 'error',
          status: err.status,
          help: err.message
        };
      }
      if (err.status === 401) {
        this.message = {
          message: error,
          type: 'error',
          status: err.status,
          help: err.error.message
        };
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      }
      if (err.status === 400 || err.status === 405 || err.status === 409) {
        this.message = {
          message: error,
          type: 'error',
          status: err.status,
          help: err.error.message
        };
      }
      this.store.dispatch(loadErrorMessagesSuccess({
        body: String(this.message?.help),
        show: true,
        title: this.message.message,
        status: this.message.status
      }));

      return throwError(this.message);
    }));
  }
}
