import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { Observable } from 'rxjs';
import { tap, map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { StudentProfileStateInterface } from 'src/app/store/reducers/student-profile-update.reducer';
import { loadStudentProfiles, loadStudentProfilesSuccess } from '../store/actions/student-profile.actions';
import { selectStudent } from '../store/selectors/student-profile.selectors';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  student$: Observable<StudentProfileStateInterface>;
  fullName: string;
  studentId: number;
  constructor(
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.student$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(tap(id => this.store.dispatch(loadStudentProfiles({ data: { id } }))))
      .pipe(tap(id => this.studentId = id))
      .pipe(mergeMap(id => this.store.pipe(select(selectStudent(id)))))

  }
  changeProfile(event: { fieldName: string, fieldNewValue: string; } | Event) {
    const eventTemp = event as { fieldName: string, fieldNewValue: string; };
    if (eventTemp.fieldName) {
      this.store.dispatch(loadStudentProfilesSuccess(
        { data: { id: this.studentId, [eventTemp.fieldName]: eventTemp.fieldNewValue } }));
    }

  }

}
