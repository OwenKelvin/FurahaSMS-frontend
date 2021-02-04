import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectLibrarySubClassComponent } from './select-library-sub-class.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibraryAdminModule } from '../../library-admin/library-admin.module';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';

describe('SelectLibrarySubClassComponent', () => {
  let component: SelectLibrarySubClassComponent;
  let fixture: ComponentFixture<SelectLibrarySubClassComponent>;

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
        EffectsModule.forRoot([]),
        LibraryAdminModule,
        HttpClientTestingModule
      ],
      declarations: [],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLibrarySubClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
