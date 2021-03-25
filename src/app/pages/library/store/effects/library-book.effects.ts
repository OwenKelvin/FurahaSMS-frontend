import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as LibraryBookActions from '../actions/library-book.actions';


@Injectable()
export class LibraryBookEffects {

  loadLibraryBooks$ = createEffect(() => this.actions$.pipe(
      ofType(LibraryBookActions.loadLibraryBooks),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => LibraryBookActions.loadLibraryBooksSuccess({data})),
          catchError(error => of(LibraryBookActions.loadLibraryBooksFailure({error}))))
      )
    ));


  constructor(private actions$: Actions) {
  }

}
