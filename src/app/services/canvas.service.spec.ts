import { TestBed } from '@angular/core/testing';

import { CanvasService } from './canvas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CanvasService', () => {
  let service: CanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CanvasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
