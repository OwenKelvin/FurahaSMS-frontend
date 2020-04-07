import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentFeePaymentService {
 
  constructor(private http: HttpClient) { }
  
  save({ studentId, data }: { studentId: number, data: any}): Observable<any> {
    return this.http.post(`api/students/${studentId}/fee-payment-receipt`, data)
  }
}
