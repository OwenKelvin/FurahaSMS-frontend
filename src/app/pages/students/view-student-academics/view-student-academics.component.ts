import {ChangeDetectionStrategy, Component} from '@angular/core';
import {StudentAcademicsService} from '../services/student-academics.service';
import {combineLatest, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {selectEditModeOnState} from '../../../store/selectors/app.selectors';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-view-student-academics',
  templateUrl: './view-student-academics.component.html',
  styleUrls: ['./view-student-academics.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewStudentAcademicsComponent {
  studentId$: Observable<number> = (this.route.parent as ActivatedRoute).paramMap
    .pipe(map(params => Number(params.get('id'))));
  academicYearSubjects$: Observable<any> = this.studentId$.pipe(
    mergeMap(studentId => this.studentAcademicsService.getForStudentWithId(studentId))
  );
  editMode$: Observable<boolean> = this.store.pipe(select(selectEditModeOnState));
  v$ = combineLatest([this.editMode$, this.studentId$, this.academicYearSubjects$]).pipe(
    map(([editMode, studentId, academicYearSubjects]) => ({editMode, studentId, academicYearSubjects}))
  );

  constructor(
    private route: ActivatedRoute,
    private studentAcademicsService: StudentAcademicsService,
    private store: Store
  ) {
  }

}
