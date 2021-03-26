import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, catchError, shareReplay, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {selectTeacher} from '../../teachers/store/selectors/teacher-profile.selectors';
import {loadTeacherProfiles} from '../../teachers/store/actions/teacher-profile.actions';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url = 'api/teachers';

  constructor(private http: HttpClient, private store: Store) {
  }

  saveTeacher(data: any): Observable<any> {
    const submitDate = {
      ...data,
      ['date_of_birth']: data.dateOfBirth,
      ['first_name']: data.firstName,
      ['last_name']: data.lastName,
      ['middle_name']: data.middleName,
      ['other_names']: data.otherNames,
      ['gender_id']: data.gender,
      ['religion_id']: data.religion,
    };
    return this.http.post('api/admissions/teachers', submitDate);
  }

  getTeacherById(id: number) {
    return this.http.get<any>(`${this.url}/${id}`)
      .pipe(
        map(this.transformTeacher),
        catchError(error => throwError(error))
      );
  }

  loadTeacherProfile$ = (id: number) => this.store.pipe(
    select(selectTeacher(id)),
    tap(profile => !profile ? this.store.dispatch(loadTeacherProfiles({data: {id}})) : null)
  );
  transformTeacher = (user: any) => ({
    ...user,
    firstName: user.first_name,
    middleName: user.middle_name,
    lastName: user.last_name,
    otherNames: user.other_names,
    dateOfBirth: user.date_of_birth,
    teacherId: user.teacher_id,
    name: user.first_name + ' ' + user.last_name
  });

  getActiveTeachers() {
    return this.http.get<any[]>(`${this.url}/?active=1`)
      .pipe(
        map(users => users.map(this.transformTeacher)),
        catchError(error => throwError(error)),
        shareReplay()
      );
  }
}
