import {TestBed} from '@angular/core/testing';

import {ClassLevelUnitLevelAllocationService} from './class-level-unit-level-allocation.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ClassLevelUnitLevelAllocationService', () => {
  let service: ClassLevelUnitLevelAllocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ClassLevelUnitLevelAllocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
