import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AcademicYearUnitAllocationComponent} from './academic-year-unit-allocation.component';
import {AcademicsModule} from '../../academics.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {reducerProvider, REDUCER_TOKEN, metaReducers} from 'src/app/store/reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ReactiveComponentModule} from '@ngrx/component';

describe('AcademicYearUnitAllocationComponent', () => {
  let component: AcademicYearUnitAllocationComponent;
  let fixture: ComponentFixture<AcademicYearUnitAllocationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AcademicsModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        EffectsModule.forRoot([]),
        ReactiveComponentModule
      ],
      declarations: [AcademicYearUnitAllocationComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearUnitAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
