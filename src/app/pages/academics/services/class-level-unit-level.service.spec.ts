import { TestBed } from '@angular/core/testing';

import { ClassLevelUnitLevelService } from './class-level-unit-level.service';

describe('ClassLevelUnitLevelService', () => {
  let service: ClassLevelUnitLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassLevelUnitLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
