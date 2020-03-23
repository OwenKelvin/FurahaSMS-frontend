import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap, tap, takeWhile } from 'rxjs/operators';
import { selectAcademicsCourse } from '../../../store/selectors/courses.selectors';
import { ICourse } from '../../interfaces/course.interface';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ELearningService } from '../../services/e-learning.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';

@Component({
  selector: 'app-e-learning-edit-course',
  templateUrl: './e-learning-edit-course.component.html',
  styleUrls: ['./e-learning-edit-course.component.css']
})
export class ELearningEditCourseComponent implements OnInit {
  course$: Observable<ICourse>;
  course: ICourse;
  modalRef: any;
  courseNameConfirmation: string;
  componentIsActive: boolean = true;
  deletingCourse: boolean;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private eLearningService: ELearningService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.course$ = this.route.parent.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.store.pipe(select(selectAcademicsCourse(id)))))
      .pipe(tap((res) => this.course = res))
  }
  openModal(template: TemplateRef<any>) {
    this.courseNameConfirmation = '';
    this.modalRef = this.modalService.show(template);
  }
  deleteCourse() {
    this.deletingCourse = true;
    this.eLearningService.deleteCourseWithId(this.course.id)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        this.modalRef.hide();
        this.router.navigate(["academics/","e-learning","admin"]);
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastBody: res.message,
          toastHeader: 'Success!',
          toastTime: 'Just now'
        }));
      })
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
