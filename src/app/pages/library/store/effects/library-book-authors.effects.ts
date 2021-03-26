import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

import * as LibraryBookAuthorActions from '../actions/library-book-author.actions';
import {LibraryAuthorService} from '../../services/library-author.service';


@Injectable()
export class LibraryBookAuthorEffects {
  loadLibraryBookAuthors$ = createEffect(() => this.actions$.pipe(
    ofType(LibraryBookAuthorActions.loadBookAuthors),
    concatMap(() => this.bookAuthorService.all$.pipe(
      map(data => LibraryBookAuthorActions.loadBookAuthorsSuccess({data})),
      catchError(error => of(LibraryBookAuthorActions.loadBookAuthorsFailure({error})))))
  ));

  constructor(private actions$: Actions, private bookAuthorService: LibraryAuthorService) {
  }
}
