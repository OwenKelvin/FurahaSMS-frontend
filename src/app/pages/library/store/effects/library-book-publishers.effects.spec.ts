import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LibraryBookPublisherEffects } from './library-book-publishers.effects';

describe('LibraryEffects', () => {
  let actions$: Observable<any>;
  let effects: LibraryBookPublisherEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LibraryBookPublisherEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LibraryBookPublisherEffects>(LibraryBookPublisherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
