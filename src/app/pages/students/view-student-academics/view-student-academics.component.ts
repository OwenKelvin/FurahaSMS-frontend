import {Component} from '@angular/core';
import {StudentAcademicsService} from '../services/student-academics.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap, tap} from 'rxjs/operators';
import {selectEditModeOnState} from '../../../store/selectors/app.selectors';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-view-student-academics',
  templateUrl: './view-student-academics.component.html',
  styleUrls: ['./view-student-academics.component.css']
})
export class ViewStudentAcademicsComponent {
  studentId: number | undefined;
  academicYearSubjects$: Observable<any> | undefined = this.route.parent?.paramMap
    .pipe(map(params => Number(params.get('id'))),
      tap(studentId => this.studentId = studentId),
      mergeMap(studentId => this.studentAcademicsService.getForStudentWithId(studentId))
    )
  editMode$: Observable<boolean> = this.store.pipe(select(selectEditModeOnState));

  constructor(
    private route: ActivatedRoute,
    private studentAcademicsService: StudentAcademicsService,
    private store: Store
  ) { }

}
