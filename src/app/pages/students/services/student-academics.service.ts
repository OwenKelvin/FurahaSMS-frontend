import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentAcademicsService {
  getAcademicsFor({studentId, academicYearId, classLevelId}: { studentId: number, academicYearId: number, classLevelId: number }) {
    const url = `api/students/${studentId}/academics/${academicYearId}/?class_level_id=${classLevelId}`;
    return this.http.get<any[]>(url).pipe(
      map(res => res.map(item => ({
        ...item,
        unitLevelId: item.unit_level_id,
        unitLevelName: item.unit_level_name
      })))
    );
  }

  getForStudentWithId(studentId: number): any {
    const url = `api/students/${studentId}/academics`;
    return this.http.get<any[]>(url).pipe(
      map(res => res.map(item => ({
        ...item,
        academicYearId: item.academic_year_id,
        academicYearName: item.academic_year_name,
      })))
    );
  }

  constructor(private http: HttpClient) {}

  saveSubjectAllocation({studentId, data}: any): Observable<any> {
    const url = `api/students/${studentId}/academics`;
    return this.http.post(url, data)
  }

  saveAcademicsFor(data: any) {
    const url = `api/students/${data.studentId}/academics/${data.academicYearId}`;
    return this.http.post(url, {...data, _method: 'PATCH'}).pipe(
      catchError(res => {
        console.log(res)
        return throwError(res)
      }),
      tap(res => console.log(res))
    )
  }
}
