import { TestBed } from '@angular/core/testing';

import { MyProfileService } from './my-profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

describe('MyProfileService', () => {
  let service: MyProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        })
      ],
      providers: [reducerProvider]
    });
    service = TestBed.inject(MyProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
