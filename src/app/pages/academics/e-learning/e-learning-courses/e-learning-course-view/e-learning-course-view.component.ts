import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {selectAcademicsCourse} from '../../../store/selectors/courses.selectors';
import {map, mergeMap} from 'rxjs/operators';
import {combineLatest} from 'rxjs';
import {selectICan} from '../../../../my-profile/store/selectors/my-profile.selectors';

@Component({
  selector: 'app-e-learning-course-view',
  templateUrl: './e-learning-course-view.component.html',
  styleUrls: ['./e-learning-course-view.component.css']
})
export class ELearningCourseViewComponent {
  courseId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  course$ = this.courseId$.pipe(
    mergeMap(id => this.store.pipe(select(selectAcademicsCourse(id)))),
  );

  editPermission$ = this.store.pipe(select(selectICan('upload curriculum content')));

  v$ = combineLatest([this.courseId$, this.course$, this.editPermission$]).pipe(
    map(([courseId, course, editPermission]) =>
      ({courseId, course, editPermission}))
  );

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {
  }
}
