import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LibraryBookAuthorEffects } from './library-book-authors.effects';

describe('LibraryBookAuthorEffects', () => {
  let actions$: Observable<any>;
  let effects: LibraryBookAuthorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LibraryBookAuthorEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LibraryBookAuthorEffects>(LibraryBookAuthorEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
