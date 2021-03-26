import {Component} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {ELearningService} from '../services/e-learning.service';
import {map} from 'rxjs/operators';
import {ICourse} from '../interfaces/course.interface';

@Component({
  selector: 'app-e-learning-admin',
  templateUrl: './e-learning-admin.component.html',
  styleUrls: ['./e-learning-admin.component.css']
})
export class ELearningAdminComponent {
  limit = 100;
  courses$: Observable<ICourse[]> = this.eLearningService.getCourses({limit: this.limit});
  filterStringSubject$ = new BehaviorSubject('');
  filterStringAction$ = this.filterStringSubject$.asObservable();
  filteredCourses$ = combineLatest([this.filterStringSubject$, this.courses$]).pipe(
    map(
      ([filterString, courses]) => courses.filter(course =>
        ((course.name && course.name.includes(filterString)) ||
          (course.classLevelName && course.classLevelName.includes(filterString)) ||
          (course.unitName && course.unitName.includes(filterString)))
      )
    )
  );
  constructor(
    private eLearningService: ELearningService
  ) {
  }
}
