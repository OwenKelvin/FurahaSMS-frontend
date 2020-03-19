import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { LibraryBookClassificationEffects } from './library-book-classifications.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LibraryBookClassificationEffects', () => {
  const actions$: Observable<any> = of(1);
  let effects: LibraryBookClassificationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LibraryBookClassificationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<LibraryBookClassificationEffects>(LibraryBookClassificationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
