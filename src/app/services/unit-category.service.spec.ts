import { TestBed } from '@angular/core/testing';

import { UnitCategoryService } from './unit-category.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SubjectCategoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: UnitCategoryService = TestBed.inject(UnitCategoryService);
    expect(service).toBeTruthy();
  });
});
