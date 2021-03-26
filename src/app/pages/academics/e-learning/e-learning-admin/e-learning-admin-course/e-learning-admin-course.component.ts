import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {loadCourses} from '../../../store/actions/courses.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-e-learning-admin-course',
  templateUrl: './e-learning-admin-course.component.html',
  styleUrls: ['./e-learning-admin-course.component.css']
})
export class ELearningAdminCourseComponent {

  loadCourses$: Observable<any> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    tap(id => this.store.dispatch(loadCourses({data: {id}})))
  );

  constructor(private route: ActivatedRoute, private store: Store) {
  }
}
