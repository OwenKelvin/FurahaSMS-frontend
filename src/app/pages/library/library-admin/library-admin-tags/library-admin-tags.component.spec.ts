import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryAdminTagsComponent } from './library-admin-tags.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LibraryAdminModule } from '../library-admin.module';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';

describe('LibraryAdminTagsComponent', () => {
  let component: LibraryAdminTagsComponent;
  let fixture: ComponentFixture<LibraryAdminTagsComponent>;

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
        RouterTestingModule,
        LibraryAdminModule
      ],
      declarations: [],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
