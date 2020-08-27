import { TestBed } from '@angular/core/testing';

import { UrlParamsStringifyService } from './url-params-stringify.service';

describe('UrlParamsStringifyService', () => {
  let service: UrlParamsStringifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlParamsStringifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
