import {TestBed} from '@angular/core/testing';

import {GuardiansService} from './guardians.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GuardiansService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GuardiansService = TestBed.inject(GuardiansService);
    expect(service).toBeTruthy();
  });
});
