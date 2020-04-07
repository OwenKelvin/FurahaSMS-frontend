import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPaymentReceiptComponent } from './new-payment-receipt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NewPaymentReceiptComponent', () => {
  let component: NewPaymentReceiptComponent;
  let fixture: ComponentFixture<NewPaymentReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ NewPaymentReceiptComponent ]
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
