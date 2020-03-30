import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, takeWhile } from 'rxjs/operators';
import { loadCourses } from '../../../store/actions/courses.actions';

@Component({
  selector: 'app-e-learning-course-item',
  templateUrl: './e-learning-course-item.component.html',
  styleUrls: ['./e-learning-course-item.component.css']
})
export class ELearningCourseItemComponent implements OnInit, OnDestroy {

  componentIsActive = true;

  constructor(
    private route: ActivatedRoute,
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
