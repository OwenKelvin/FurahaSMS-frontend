import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinancialPlanService {

  constructor(
    private http: HttpClient
  ) { }
  submit(input: { academicYearId: number, data: any }): Observable<any>{
    const { academicYearId, data } = input;
    const url = `api/accounts/academic-year/${academicYearId}/financial-plan`;
    return <any>this.http.post(url, data);
  }
}
