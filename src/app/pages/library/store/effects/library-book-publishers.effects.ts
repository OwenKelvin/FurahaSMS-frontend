import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

import * as LibraryBookPublisherActions from '../actions/library-book-publisher.actions';
import {LibraryPublisherService} from '../../services/library-publisher.service';


@Injectable()
export class LibraryBookPublisherEffects {
  loadLibraryBookPublishers$ = createEffect(() => this.actions$.pipe(
    ofType(LibraryBookPublisherActions.loadLibraryBookPublishers),
    concatMap(() =>
      this.bookPublisherService.all$.pipe(
        map(data => LibraryBookPublisherActions.loadLibraryBookPublishersSuccess({data})),
        catchError(error => of(LibraryBookPublisherActions.loadLibraryBookPublishersFailure({error}))))
    )
  ));

  loadLibraryBookPublisher$ = createEffect(() => this.actions$.pipe(
    ofType(LibraryBookPublisherActions.loadLibraryBookPublisher),
    concatMap(({data}) =>
      this.bookPublisherService.getPublisherWithId(data.id).pipe(
        map(value => LibraryBookPublisherActions.loadLibraryBookPublisherSuccess({data: value})),
        catchError(error => of(LibraryBookPublisherActions.loadLibraryBookPublisherFailure({error}))))
    )
  ));

  constructor(private actions$: Actions, private bookPublisherService: LibraryPublisherService) {
  }
}
