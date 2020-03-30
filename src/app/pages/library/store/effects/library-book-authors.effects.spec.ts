import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { LibraryBookAuthorEffects } from './library-book-authors.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LibraryBookAuthorEffects', () => {
  const actions$: Observable<any> = of(1);
  let effects: LibraryBookAuthorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LibraryBookAuthorEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<LibraryBookAuthorEffects>(LibraryBookAuthorEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
