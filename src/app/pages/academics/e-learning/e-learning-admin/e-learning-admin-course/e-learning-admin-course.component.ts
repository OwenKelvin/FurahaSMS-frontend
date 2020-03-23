import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeWhile, tap, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CoursesEffects } from '../../../store/effects/courses.effects';
import { loadCourses } from '../../../store/actions/courses.actions';

@Component({
  selector: 'app-e-learning-admin-course',
  templateUrl: './e-learning-admin-course.component.html',
  styleUrls: ['./e-learning-admin-course.component.css']
})
export class ELearningAdminCourseComponent implements OnInit, OnDestroy {
  componentIsActive: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private coursesEffects: CoursesEffects,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(map(id => this.store.dispatch(loadCourses({ data: { id } }))))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe();
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
