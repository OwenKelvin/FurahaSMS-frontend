import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadToastShowsSuccess } from '../store/actions/toast-show.actions';

@Injectable()
export class ResMessageInterceptor implements HttpInterceptor {
  constructor(private store: Store) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse && event.body && event.body.saved) {
          if (event.body.message) {
            this.store.dispatch(loadToastShowsSuccess({
              showMessage: true,
              toastBody: event.body.message,
              toastHeader: 'Success!',
              toastTime: 'Just now'
            }));
          }
        }
      })
    );
  }

}
