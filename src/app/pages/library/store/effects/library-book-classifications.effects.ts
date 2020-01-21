import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LibraryBookClassificationActions from '../actions/library-book-classification.actions';
import { LibraryBookClassificationService } from '../../services/library-book-classification.service';



@Injectable()
export class LibraryBookClassificationEffects {

  constructor(private actions$: Actions, private bookClassificationService: LibraryBookClassificationService) { }

  loadibraryBookClassifications$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(LibraryBookClassificationActions.loadBookClassifications),
      concatMap(() => {
        return this.bookClassificationService.getAll().pipe(
          map(data => LibraryBookClassificationActions.loadBookClassificationsSuccess({ data })),
          catchError(error => of(LibraryBookClassificationActions.loadBookClassificationsFailure({ error }))));

      })

    );
  });
}
