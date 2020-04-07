import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { PaymentTypeService } from '../../services/payment-type.service';
import { selectPaymentMethods } from '../../store/selectors/payment-type.selectors';
import { StudentFeePaymentService } from '../../services/student-fee-payment.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, map } from 'rxjs/operators';


@Component({
  selector: 'app-new-payment-receipt',
  templateUrl: './new-payment-receipt.component.html',
  styleUrls: ['./new-payment-receipt.component.css']
})
export class NewPaymentReceiptComponent implements OnInit {
  newPaymentForm: FormGroup;
  paymentMethods$: any;
  isSubmitting: boolean;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private paymentTypeService: PaymentTypeService,
    private studentFeePaymentService: StudentFeePaymentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paymentTypeService.loadAll$.subscribe();
    this.paymentMethods$ = this.store.pipe(
      select(selectPaymentMethods)
    );
    this.newPaymentForm = this.fb.group({
      paymentAmount: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
      paymentRef: [''],
      paymentDate: [''],
    });
  }
  validateForm() {

  }
  submitPayment() {
    this.isSubmitting = true;
    this.route.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      mergeMap((id) => this.studentFeePaymentService.save({ studentId: id, data: this.newPaymentForm.value }))
    )
      .subscribe({
        next: () => {

        },
        error: () => this.isSubmitting = false
      });
  }

}
