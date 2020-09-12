import { TestBed } from '@angular/core/testing';

import { TeacherService } from './teacher.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../store/reducers';
import {StoreModule} from '@ngrx/store';

describe('TeacherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
    ],
    providers: [reducerProvider]
  }));

  it('should be created', () => {
    const service: TeacherService = TestBed.inject(TeacherService);
    expect(service).toBeTruthy();
  });
});
