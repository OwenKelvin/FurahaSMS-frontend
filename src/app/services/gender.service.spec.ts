import { TestBed } from '@angular/core/testing';

import { GenderService } from './gender.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { reducerProvider, REDUCER_TOKEN, metaReducers } from '../store/reducers';
import { StoreModule } from '@ngrx/store';

describe('GenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [reducerProvider],
    imports: [
      StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
      HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GenderService = TestBed.inject(GenderService);
    expect(service).toBeTruthy();
  });
});
