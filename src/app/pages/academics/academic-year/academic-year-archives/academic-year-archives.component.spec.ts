import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { AcademicYearArchivesComponent } from './academic-year-archives.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';

describe('AcademicYearArchivesComponent', () => {
  let component: AcademicYearArchivesComponent;
  let fixture: ComponentFixture<AcademicYearArchivesComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        HttpClientTestingModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        ReactiveComponentModule
      ],
      declarations: [AcademicYearArchivesComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearArchivesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
