import { TestBed } from '@angular/core/testing';

import { ReligionService } from './religion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { reducerProvider, REDUCER_TOKEN, metaReducers } from '../store/reducers';
import { StoreModule } from '@ngrx/store';

describe('ReligionService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [reducerProvider],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ]
    })
  );

  it('should be created', () => {
    const service: ReligionService = TestBed.inject(ReligionService);
    expect(service).toBeTruthy();
  });
});
