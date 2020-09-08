import { TestBed } from '@angular/core/testing';

import { HttpCacheService } from './http-cache.service';
import {AppPrintModule} from '../shared/print/print.module';

describe('HttpCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AppPrintModule
    ]
  }));

  it('should be created', () => {
    const service: HttpCacheService = TestBed.inject(HttpCacheService);
    expect(service).toBeTruthy();
  });
});
