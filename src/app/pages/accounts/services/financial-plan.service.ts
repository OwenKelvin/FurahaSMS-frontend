import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinancialPlanService {

  constructor(
    private http: HttpClient
  ) { }
  submit(input: { academicYearId: number, data: any }): Observable<any> {
    const { academicYearId, data } = input;
    const url = `api/accounts/academic-year/${academicYearId}/financial-plan`;
    return this.http.post(url, data) as any;
  }

  getForAcademicYear(academicYearId): Observable<any> {
    const url = `api/accounts/academic-year/${academicYearId}/financial-plan`;
    return this.http.get(url)
      .pipe(map(res => {
        // res = {
        //   ...res,
        //   tuitionFee: (res as any).tuition_fee,
        //   tuition_fee: undefined
        // };
        // delete ((res as any).tuition_fee)

        return res;
      }));
  }
}
