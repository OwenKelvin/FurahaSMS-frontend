import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPaymentStatementComponent } from './student-payment-statement.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NewPaymentReceiptComponent } from '../new-payment-receipt/new-payment-receipt.component';
import { StudentPaymentFeeStructureComponent } from '../student-payment-fee-structure/student-payment-fee-structure.component';

describe('StudentPaymentStatementComponent', () => {
  let component: StudentPaymentStatementComponent;
  let fixture: ComponentFixture<StudentPaymentStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        TabsModule
      ],
      declarations: [
        StudentPaymentStatementComponent,
        NewPaymentReceiptComponent,
        StudentPaymentFeeStructureComponent
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
