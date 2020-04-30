import { TestBed } from '@angular/core/testing';

import { SupportStaffService } from './support-staff.service';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SupportStaffService', () => {
  let service: SupportStaffService;

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
    service = TestBed.inject(SupportStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
