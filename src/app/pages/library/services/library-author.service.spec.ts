import {TestBed} from '@angular/core/testing';

import {LibraryAuthorService} from './library-author.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CreateUnitComponent} from '../../academics/curriculum/create-unit/create-unit.component';

describe('LibraryAuthorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    declarations: [CreateUnitComponent]
  }));

  it('should be created', () => {
    const service: LibraryAuthorService = TestBed.inject(LibraryAuthorService);
    expect(service).toBeTruthy();
  });
});
