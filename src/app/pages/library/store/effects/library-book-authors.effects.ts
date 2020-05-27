import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LibraryBookAuthorActions from '../actions/library-book-author.actions';
import { LibraryAuthorService } from '../../services/library-author.service';



@Injectable()
export class LibraryBookAuthorEffects {

  constructor(private actions$: Actions, private bookAuthorService: LibraryAuthorService) { }

  loadibraryBookAuthors$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(LibraryBookAuthorActions.loadBookAuthors),
      concatMap(() => {
        return this.bookAuthorService.all$.pipe(
          map(data => LibraryBookAuthorActions.loadBookAuthorsSuccess({ data })),
          catchError(error => of(LibraryBookAuthorActions.loadBookAuthorsFailure({ error }))));

      })

    );
  });
}
