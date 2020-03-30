import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearFinancialPlanComponent } from './academic-year-financial-plan.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('AcademicYearFinancialPlanComponent', () => {
  let component: AcademicYearFinancialPlanComponent;
  let fixture: ComponentFixture<AcademicYearFinancialPlanComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        HttpClientTestingModule
      ],
      declarations: [AcademicYearFinancialPlanComponent],
      providers: [
        reducerProvider,
        {
        provide: ActivatedRoute,
        useValue: {
          parent: { paramMap: of({get: () => 1 }) }
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: () => 1
          }
        }
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    spyOn(window, 'confirm').and.returnValue(true);
    fixture = TestBed.createComponent(AcademicYearFinancialPlanComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
