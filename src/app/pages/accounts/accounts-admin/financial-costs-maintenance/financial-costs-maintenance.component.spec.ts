import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FinancialCostsMaintenanceComponent} from './financial-costs-maintenance.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {StoreModule} from '@ngrx/store';
import {ReactiveComponentModule} from '@ngrx/component';

describe('FinancialCostsMaintenanceComponent', () => {
  let component: FinancialCostsMaintenanceComponent;
  let fixture: ComponentFixture<FinancialCostsMaintenanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        AppInputModule,
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        ReactiveComponentModule
      ],
      declarations: [FinancialCostsMaintenanceComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialCostsMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
