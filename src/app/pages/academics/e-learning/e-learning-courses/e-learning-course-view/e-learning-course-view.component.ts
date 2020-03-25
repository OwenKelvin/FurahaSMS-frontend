import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectAcademicsCourse } from '../../../store/selectors/courses.selectors';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ICourse } from '../../interfaces/course.interface';

@Component({
  selector: 'app-e-learning-course-view',
  templateUrl: './e-learning-course-view.component.html',
  styleUrls: ['./e-learning-course-view.component.css']
})
export class ELearningCourseViewComponent implements OnInit {
  course$: Observable<ICourse | null>;
  course: ICourse | null;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.course$ = (this.route.parent as ActivatedRoute).paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.store.pipe(select(selectAcademicsCourse(id)))))
      .pipe(tap((res) => this.course = res));
  }

}