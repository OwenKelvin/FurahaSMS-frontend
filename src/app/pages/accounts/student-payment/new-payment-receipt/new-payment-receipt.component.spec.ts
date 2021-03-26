import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {NewPaymentReceiptComponent} from './new-payment-receipt.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {FormErrorsModule} from '../../../../shared/form-errors/form-errors.module';
import {accountFeatureKey, reducers} from '../../store/reducers';
import {ReactiveComponentModule} from '@ngrx/component';

describe('NewPaymentReceiptComponent', () => {
  let component: NewPaymentReceiptComponent;
  let fixture: ComponentFixture<NewPaymentReceiptComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewPaymentReceiptComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(accountFeatureKey, reducers),
        FormErrorsModule,
        AppInputModule,
        AppValidateSubmitButtonsModule,
        ReactiveComponentModule
      ],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPaymentReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
