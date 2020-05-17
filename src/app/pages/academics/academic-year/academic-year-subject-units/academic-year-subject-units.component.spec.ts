import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearSubjectUnitsComponent } from './academic-year-subject-units.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { AcademicsModule } from '../../academics.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { EffectsModule } from '@ngrx/effects';

describe('AcademicYearSubjectUnitsComponent', () => {
  let component: AcademicYearSubjectUnitsComponent;
  let fixture: ComponentFixture<AcademicYearSubjectUnitsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
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
        AcademicsModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        NgSelectModule,
        AppInputModule
      ],
      declarations: [AcademicYearSubjectUnitsComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              paramMap: of({
                get: () => 1
              })
            }
          }
        }
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearSubjectUnitsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
