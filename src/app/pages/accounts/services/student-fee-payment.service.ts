import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectStudentFeeStatement } from '../store/selectors/student-fee-statement.selectors';
import { tap } from 'rxjs/operators';
import { loadStudentFeeStatements } from '../store/actions/student-fee-statement.actions';

@Injectable({
  providedIn: 'root'
})
export class StudentFeePaymentService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }
  
  loadStudentFee$ = (id: number) => this.store.pipe(
    select(selectStudentFeeStatement(id)),
    tap((res) => {
      console.log({res})
      if (!res) {
         this.store.dispatch(loadStudentFeeStatements({ data: { id } }))
      }
     
    }),
    tap((res) => console.log(res)),
  );
  
  getFeesStatementForStudentWithId(studentId: number): Observable<any> {
    const url = `api/students/${studentId}/fee-statement`;
    return this.http.get(url);
  }
  save({ studentId, data }: { studentId: number, data: any; }): Observable<any> {
    const submitData = {
      amount: data.paymentAmount.replace(/,/g, ''), // TODO-me Convert this to match locale
      transaction_date: data.paymentDate,
      ref: data.paymentRef,
      payment_method_id: data.paymentType
    };
    return this.http.post(`api/accounts/students/${studentId}/fee-payment-receipt`, submitData)
  }
}
