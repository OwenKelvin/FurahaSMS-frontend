import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LibraryBookEffects } from './library-book.effects';

describe('LibraryBookEffects', () => {
  let actions$: Observable<any>;
  let effects: LibraryBookEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LibraryBookEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LibraryBookEffects>(LibraryBookEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
