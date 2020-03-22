import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ELearningService } from '../services/e-learning.service';
import { map, takeWhile } from 'rxjs/operators';
import { ICourse } from '../interfaces/course.interface';


@Component({
  selector: 'app-e-learning-admin',
  templateUrl: './e-learning-admin.component.html',
  styleUrls: ['./e-learning-admin.component.css']
})
export class ELearningAdminComponent implements OnInit, OnDestroy {

  courses$: Observable<ICourse[]>;
  limit = 100;
  filterString = '';
  courses: ICourse[] = [];
  contentLoaded = false;
  componentIsActive = true;
  constructor(
    private eLearningService: ELearningService
  ) { }

  ngOnInit() {
    this.courses$ = this.eLearningService.getCourses({ limit: this.limit })

      .pipe(takeWhile(() => this.componentIsActive));
    this.courses$.subscribe((courses: ICourse[]) => {
      this.courses = courses;
      this.contentLoaded = true;
    });
  }
  get filteredCourses(): ICourse[] {
    console.log(this.courses)
    return this.courses.filter(course => {

      return (course.name && course.name.includes(this.filterString)) ||
        (course.classLevelName && course.classLevelName.includes(this.filterString)) ||
        (course.unitName && course.unitName.includes(this.filterString));
    });

  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
