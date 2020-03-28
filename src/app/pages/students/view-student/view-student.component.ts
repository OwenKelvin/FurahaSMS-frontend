import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { Observable } from 'rxjs';
import { tap, map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { StudentProfileStateInterface } from 'src/app/store/reducers/student-profile-update.reducer';
import { loadStudentProfileUpdatesSuccess } from 'src/app/store/actions/student-profile-update.actions';
import { loadStudentProfiles } from '../store/actions/student-profile.actions';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  student$: Observable<StudentProfileStateInterface>;
  fullName: string;
  constructor(
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(tap(id => this.store.dispatch(loadStudentProfiles({ data: { id }}))))
      // .pipe(mergeMap(studentId => this.studentService.getStudentById(studentId)))
      .subscribe(response => console.log({response}))
    
    
    
    const studentId = this.activatedRoute.snapshot.params.id;
    this.student$ = this.studentService.getStudentById(studentId)
      .pipe(tap(profile => {
        const middleName = ' ' + (profile.middleName ? profile.middleName : '');
        this.fullName = profile.firstName + ' ' + profile.lastName + middleName + ' | ' + profile.studentId;
        this.store.dispatch(loadStudentProfileUpdatesSuccess({ data: profile }));
      }));
  }
  changeProfile($event: { fieldName: string, fieldNewValue: string; }) {
    this.store.dispatch(loadStudentProfileUpdatesSuccess({ data: { [$event.fieldName]: $event.fieldNewValue } }));
  }

}
