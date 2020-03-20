import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ELearningService } from '../services/e-learning.service';
import { map } from 'rxjs/operators';
import { ICourse } from '../interfaces/course.interface';


@Component({
  selector: 'app-e-learning-admin',
  templateUrl: './e-learning-admin.component.html',
  styleUrls: ['./e-learning-admin.component.css']
})
export class ELearningAdminComponent implements OnInit {

  courses$: Observable<ICourse[]>;
  limit = 20;
  filterString: string = '';
  constructor(
    private eLearningService: ELearningService
  ) { }

  ngOnInit() {
    this.courses$ = this.eLearningService.getCourses({ limit: this.limit });
  }
  get filteredCourses$(): Observable<ICourse[]> {
    return this.courses$
      .pipe(map(courses => {
        return courses.filter(course => {
          return course.name.includes(this.filterString) || 
            course.classLevelName.includes(this.filterString) ||
            course.unitName.includes(this.filterString)
        })
      }))
  }
}
