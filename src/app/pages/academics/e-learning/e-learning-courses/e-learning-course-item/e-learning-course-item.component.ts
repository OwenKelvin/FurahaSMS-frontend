import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {loadCourses} from '../../../store/actions/courses.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-e-learning-course-item',
  templateUrl: './e-learning-course-item.component.html',
  styleUrls: ['./e-learning-course-item.component.css']
})
export class ELearningCourseItemComponent {

  loadCourses$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    tap(id => this.store.dispatch(loadCourses({data: {id}})))
  );

  constructor(private route: ActivatedRoute, private store: Store) {
  }
}
