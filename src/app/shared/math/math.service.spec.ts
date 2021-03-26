import {TestBed} from '@angular/core/testing';

import {MathService} from './math.service';

// @ts-ignore
// const MathJax = {};

describe('MathService', () => {
  let service: MathService;
  pyOn(global, 'MathJax').and.callThrough();
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
