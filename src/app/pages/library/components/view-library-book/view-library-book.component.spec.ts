import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ViewLibraryBookComponent} from './view-library-book.component';
import {LibraryModule} from '../../library.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';

describe('ViewLibraryBookComponent', () => {
  let component: ViewLibraryBookComponent;
  let fixture: ComponentFixture<ViewLibraryBookComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LibraryModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLibraryBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
