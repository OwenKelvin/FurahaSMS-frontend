import {Component, OnInit, OnDestroy} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {ICourse} from '../interfaces/course.interface';
import {ELearningService} from '../services/e-learning.service';
import {map, takeUntil} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-e-learning-courses',
  templateUrl: './e-learning-courses.component.html',
  styleUrls: ['./e-learning-courses.component.css']
})
export class ELearningCoursesComponent extends subscribedContainerMixin() implements OnDestroy {

  limit = 100;
  courses$: Observable<ICourse[]> = this.eLearningService.getCourses({limit: this.limit})
    .pipe(takeUntil(this.destroyed$));
  filterString = '';
  isCollapsed: boolean[]= [false];
  filterSubject$ = new BehaviorSubject('');
  filterAction$ = this.filterSubject$.asObservable();
  filteredCourses$: Observable<ICourse[]> = combineLatest([
    this.courses$, this.filterAction$ ]).pipe(
      map(([courses, filterString]) => courses.filter(course => (course.name && course.name.includes(filterString)) ||
          (course.classLevelName && course.classLevelName.includes(filterString)) ||
          (course.academicYearName && course.academicYearName.includes(filterString)) ||
          (course.unitName && course.unitName.includes(filterString))))
  );

  constructor(private eLearningService: ELearningService) {
    super();
  }

  // get filteredCourses(): ICourse[] {
  //   return this.courses.filter(course => {
  //
  //     return (course.name && course.name.includes(this.filterString)) ||
  //       (course.classLevelName && course.classLevelName.includes(this.filterString)) ||
  //       (course.academicYearName && course.academicYearName.includes(this.filterString)) ||
  //       (course.unitName && course.unitName.includes(this.filterString));
  //   });
  //
  // }

  toggleCollapse(i: number) {
    const temp = this.isCollapsed[i];
    this.isCollapsed = [false];

    this.isCollapsed[i] = !temp;
  }

  groupedCourses(xs: any[], key: string | number): any[] {
    const grouped = xs.reduce((acc: any, x: any) => Object.assign({}, acc, {
      [x[key]]: (acc[x[key] as any] || []).concat(x)
    }), {});

    return Object.entries(grouped);
  }
}
