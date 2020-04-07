import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentFeePaymentService {

  constructor(private http: HttpClient) { }

  save({ studentId, data }: { studentId: number, data: any; }): Observable<any> {
    const submitData = {
      amount: data.paymentAmount.replace(/,/g, ''), // TODO-me Convert this to match locale
      date: data.paymentDate,
      ref: data.paymentRef,
      payment_method_id: data.paymentType
    };
    return this.http.post(`api/accounts/students/${studentId}/fee-payment-receipt`, submitData)
  }
}
