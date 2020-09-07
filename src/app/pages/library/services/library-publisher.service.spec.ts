import {TestBed} from '@angular/core/testing';

import {LibraryPublisherService} from './library-publisher.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';

describe('LibraryPublisherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
    ],
    providers: [reducerProvider]
  }));

  it('should be created', () => {
    const service: LibraryPublisherService = TestBed.inject(LibraryPublisherService);
    expect(service).toBeTruthy();
  });
});
