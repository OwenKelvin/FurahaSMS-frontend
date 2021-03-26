import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ViewAcademicYearFinancialPlanComponent} from './view-academic-year-financial-plan.component';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {academicYearPlanFeatureKey, reducer} from '../store/reducers/academic-year-plan.reducer';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ViewAcademicYearFinancialPlanComponent', () => {
  let component: ViewAcademicYearFinancialPlanComponent;
  let fixture: ComponentFixture<ViewAcademicYearFinancialPlanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppLoadingBubbleModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(academicYearPlanFeatureKey, reducer),
        HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [ViewAcademicYearFinancialPlanComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              paramMap: of({get: () => 0})
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcademicYearFinancialPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
