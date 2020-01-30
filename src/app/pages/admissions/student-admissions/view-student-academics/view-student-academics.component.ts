import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { selectStudentId } from 'src/app/store/selectors/student-profile.selector';
import { StudentAcademicsService } from '../../../students/services/student-academics.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, takeWhile, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-student-academics',
  templateUrl: './view-student-academics.component.html',
  styleUrls: ['./view-student-academics.component.css']
})
export class ViewStudentAcademicsComponent implements OnInit, OnDestroy {
  studentId$: Observable<any>;
  componentIsActive: boolean;
  academicYearSubjects$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.AppState>, private studentAcademicsService: StudentAcademicsService) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.academicYearSubjects$ = this.route.parent.paramMap
      .pipe(takeWhile(() => this.componentIsActive))
      .pipe(map(params => +params.get('id')))
      .pipe(mergeMap(studentId => this.studentAcademicsService.getForStudentWithId(studentId)));      
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
