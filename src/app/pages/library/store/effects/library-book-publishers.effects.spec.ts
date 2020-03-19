import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { LibraryBookPublisherEffects } from './library-book-publishers.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LibraryEffects', () => {
  const actions$: Observable<any> = of(1);
  let effects: LibraryBookPublisherEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LibraryBookPublisherEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<LibraryBookPublisherEffects>(LibraryBookPublisherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
