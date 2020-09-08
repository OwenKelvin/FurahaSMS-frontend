import {TestBed} from '@angular/core/testing';

import {UsersService} from './users.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../store/reducers';
import {academicsFeatureKey, reducers} from '../pages/academics/store/reducers';

describe('UsersService', () => {
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
      StoreModule.forFeature(academicsFeatureKey, reducers)
    ],
    providers: [
      reducerProvider
    ]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.inject(UsersService);
    expect(service).toBeTruthy();
  });
});
