import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

const MathJax = {};

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
