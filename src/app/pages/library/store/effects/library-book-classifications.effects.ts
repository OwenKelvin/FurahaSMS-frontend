import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

import * as LibraryBookClassificationActions from '../actions/library-book-classification.actions';
import {LibraryBookClassificationService} from '../../services/library-book-classification.service';


@Injectable()
export class LibraryBookClassificationEffects {
  loadLibraryBookClassifications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LibraryBookClassificationActions.loadBookClassifications),
      concatMap(() =>
        this.bookClassificationService.all$.pipe(
          map(data => LibraryBookClassificationActions.loadBookClassificationsSuccess({data})),
          catchError(error => of(LibraryBookClassificationActions.loadBookClassificationsFailure({error}))))
      )
    )
  );
  constructor(private actions$: Actions, private bookClassificationService: LibraryBookClassificationService) {
  }
}
