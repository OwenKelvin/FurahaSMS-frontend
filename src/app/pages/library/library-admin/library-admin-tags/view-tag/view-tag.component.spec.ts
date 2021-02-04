import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewTagComponent } from './view-tag.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/pages/library/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LibraryAdminModule } from '../../library-admin.module';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';

describe('ViewTagComponent', () => {
  let component: ViewTagComponent;
  let fixture: ComponentFixture<ViewTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LibraryAdminModule,
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
        RouterTestingModule
      ],
      declarations: [],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
