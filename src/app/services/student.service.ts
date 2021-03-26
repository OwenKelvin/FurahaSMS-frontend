import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Store, select} from '@ngrx/store';
import {selectStudent} from '../pages/students/store/selectors/student-profile.selectors';
import {loadStudentProfiles} from '../pages/students/store/actions/student-profile.actions';
import {UrlParamsStringifyService} from '../shared/url-params-stringify/services/url-params-stringify.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'api/students';

  constructor(
    private http: HttpClient,
    private store: Store,
    private urlParamsStringifyService: UrlParamsStringifyService
  ) {
  }

  loadStudentProfile$ = (id: number) => this.store.pipe(
    select(selectStudent(id)),
    tap(profile => !profile ? this.store.dispatch(loadStudentProfiles({data: {id}})) : null)
  );

  getStudents(data: { stream: number[]; academicYear: number; classLevel: number[] }) {

    const url = `${this.url}?${this.urlParamsStringifyService.stringify({...data, last: 30})}`;
    return this.http.get<any[]>(url).pipe(
      tap(res => console.log(res)),
      map(res => res.map(item => ({
        ...item,
        genderAbbr: item.gender_abbreviation,
        streamName: item.stream_name,
        academicYearName: item.academic_year_name,
        classLevelName: item.class_level_name,
        name: `${item.first_name} ${item.last_name}`
      })))
    );
  }

  createNewStudent(newStudentData: any): Observable<any> {

    return this.save(newStudentData);
  }

  save(data: any, idNumber: any = null): Observable<any> {
    const submitData = {
      ['first_name']: data.firstName,
      ['last_name']: data.lastName,
      ['middle_name']: data.middleName,
      ['other_names']: data.otherNames,
      ['date_of_birth']: data.dateOfBirth,
      ['student_school_id_number']: data.idNumber,
      ['birth_cert_number']: data.birthCertNumber,
      ['gender_id']: data.gender,
      ['religion_id']: data.religion

    };
    let url = `api/admissions/students/identification`;

    if (idNumber) {
      url = `${url}/${data.id}`;
      return this.http.patch<any>(url, {...submitData}).pipe(map(user => user));
    } else {
      return this.http.post<any>(url, submitData).pipe(map(user => user));
    }
  }

  getStudentById(id: string | number): Observable<any> {
    const url = `api/students?id=${id}`;
    return this.http.get<any>(url)
      .pipe(
        map(user => ({
          ...user,
          firstName: user.first_name,
          middleName: user.middle_name,
          lastName: user.last_name,
          otherNames: user.other_names,
          dateOfBirth: user.date_of_birth,
          studentId: user.student_id
        })),
        catchError(error => throwError(error))
      );
  }

  getStudentBySchoolId(idNumber: string | number): Observable<any> {
    const url = `api/student/id-number?q=${idNumber}`;
    return this.http.get<any>(url)
      .pipe(
        map(user => user),
        catchError(error => throwError(error))
      );
  }

  getRecentlyCreatedStudents(): Observable<any[]> {
    const url = `api/students?last=30`;
    return this.http.get(url).pipe(map(res => res as any[]));
  }

  getStudentByName(query: string): Observable<any[]> {
    return this.http.get<any>(
      'api/students', {
        params: {q: query}
      }).pipe(
      map((data: any) => data.map((item: any) => ({
        ...item,
        name: item.first_name + ' ' + item.last_name + ' ' + (item.middle_name ? item.middle_name : ''),
        firstName: item.first_name,
        lastName: item.last_name,
        middleName: item.middle_name,
        otherNames: item.other_names,
        dateOfBirth: item.date_of_birth,
      })) || []),
      catchError((e) => throwError(e))
    );
  }

  getStreamFor(params: { studentId: number; academicYearId: number; classLevelId: number }) {
    const data = {
      ['academic_year_id']: params.academicYearId,
      ['class_level_id']: params.classLevelId
    };
    const url = `api/students/${params.studentId}/streams?${this.urlParamsStringifyService.stringify(data)}`;
    return this.http.get<any>(url).pipe(
      map(({id, name, abbreviation, ['associated_color']: associatedColor}) =>
        ({id, name, abbreviation, associatedColor}))
    );
  }
}
