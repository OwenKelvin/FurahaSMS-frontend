import { TestBed } from '@angular/core/testing';

import { NetworkLoadingService } from './network-loading.service';

describe('NetworkLoadingService', () => {
  let service: NetworkLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
