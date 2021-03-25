import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinancialPlanService {
  constructor(private http: HttpClient) {
  }

  url = (academicYearId: number) => `api/accounts/academic-year/${academicYearId}/financial-plan`;

  submit = ({academicYearId, data}: { academicYearId: number; data: any }): Observable<any> =>
    this.http.post<any>(this.url(academicYearId), data);
  getForAcademicYear = (academicYearId: number): Observable<any> =>
    this.http.get<any>(this.url(academicYearId));
}
