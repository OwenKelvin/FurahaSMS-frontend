import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {SelectLibraryClassComponent} from './select-library-class.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LibraryAdminModule} from '../../library-admin/library-admin.module';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';

describe('SelectLibraryClassComponent', () => {
  let component: SelectLibraryClassComponent;
  let fixture: ComponentFixture<SelectLibraryClassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('library', reducers),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        LibraryAdminModule
      ],
      declarations: [],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLibraryClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
