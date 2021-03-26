import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {selectSupportStaffWithId} from '../store/selectors/support-staff.selectors';
import {tap, filter, map, catchError} from 'rxjs/operators';
import {loadSupportStaffById} from '../store/actions/support-staff.actions';
import {Observable, throwError} from 'rxjs';
import {selectStaffTypes} from '../../admissions/store/selectors/staff-type.selectors';
import {loadStaffTypes} from '../../admissions/store/actions/staff-type.actions';

@Injectable({
  providedIn: 'root'
})
export class SupportStaffService {

  loadAllStaffTypes$: Observable<any> = this.store.pipe(
    select(selectStaffTypes),
    filter(res => Number(res?.length) < 2),
    tap(() => this.store.dispatch(loadStaffTypes()))
  );

  constructor(private store: Store, private http: HttpClient) {
  }

  staffTypes(): Observable<any> {
    return this.http.get(`api/permissions-and-roles/roles/?staff=${true}`);
  }

  loadStaffWithId$ = (id: number) => this.store.pipe(
    select(selectSupportStaffWithId(id)),
    tap((profile) => profile ? profile : this.store.dispatch(loadSupportStaffById({data: {id}})))
  );

  getSupportStaffById(id: number): Observable<any> {
    return this.http.get<any>(`api/admissions/support-staffs/${id}`)
      .pipe(
        map((user) => ({
          ...user,
          firstName: user.first_name,
          middleName: user.middle_name,
          lastName: user.last_name,
          otherNames: user.other_names,
          dateOfBirth: user.date_of_birth,
          teacherId: user.teacher_id
        })),
        catchError(error => throwError(error))
      );
  }

  save(data: any): Observable<any> {

    return this.http.post('api/admissions/support-staffs', {
      ...data,
      ['date_of_birth']: data.dateOfBirth,
      ['first_name']: data.firstName,
      ['last_name']: data.lastName,
      ['middle_name']: data.middleName,
      ['other_names']: data.otherNames
    });
  }
}
