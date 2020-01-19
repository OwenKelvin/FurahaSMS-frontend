import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LibraryBookPublisherActions from '../actions/library-book-publisher.actions';
import { BookPublisherService } from '../../services/book-publisher.service';



@Injectable()
export class LibraryBookPublisherEffects {
  constructor(private actions$: Actions, private bookPublisherService: BookPublisherService) { }

  loadLibrarys$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(LibraryBookPublisherActions.loadLibraryBookPublishers),
      concatMap(() =>
        this.bookPublisherService.getAll().pipe(
          map(data => LibraryBookPublisherActions.loadLibraryBookPublishersSuccess({ data })),
          catchError(error => of(LibraryBookPublisherActions.loadLibraryBookPublishersFailure({ error }))))
      )
    );
  });

}
