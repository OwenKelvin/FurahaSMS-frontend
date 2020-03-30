import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcademicYearUnitService {

  constructor(private http: HttpClient) { }
  getUnitsFor({ academicYear, classLevel }: any): Observable<any> {

    return this.http.get(`api/academic-years/${academicYear}/unit-levels/?class_level=${classLevel}`);

  }
}
