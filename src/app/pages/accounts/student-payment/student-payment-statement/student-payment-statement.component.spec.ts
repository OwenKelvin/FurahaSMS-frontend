import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentPaymentStatementComponent } from './student-payment-statement.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NewPaymentReceiptComponent } from '../new-payment-receipt/new-payment-receipt.component';
import { StudentPaymentFeeStructureComponent } from '../student-payment-fee-structure/student-payment-fee-structure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { accountFeatureKey } from '../../store/reducers';
import { reducer } from '../../store/reducers/account.reducer';
import { of } from 'rxjs';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {ReactiveComponentModule} from '@ngrx/component';

describe('StudentPaymentStatementComponent', () => {
  let component: StudentPaymentStatementComponent;
  let fixture: ComponentFixture<StudentPaymentStatementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        TabsModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(accountFeatureKey, reducer),
        AppValidateSubmitButtonsModule,
        ReactiveComponentModule
      ],
      declarations: [
        StudentPaymentStatementComponent,
        NewPaymentReceiptComponent,
        StudentPaymentFeeStructureComponent
      ],
      providers: [
        reducerProvider,
        {
          provide: Store,
          useValue: {
            select: () => of(1),
            pipe: () => of(1),
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPaymentStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
