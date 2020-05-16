import { TestBed } from '@angular/core/testing';

import { NetworkLoadingInterceptor } from './network-loading.interceptor';

describe('NetworkLoadingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NetworkLoadingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NetworkLoadingInterceptor = TestBed.inject(NetworkLoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
