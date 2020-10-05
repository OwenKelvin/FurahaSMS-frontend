import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/reducers';
import {OnlineAssessmentService} from '../services/online-assessment.service';
import {loadCourses} from '../../store/actions/courses.actions';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';
import {takeUntil} from 'rxjs/operators';
import {modalMixin} from '../../../../shared/mixins/modal.mixin';

@Component({
  selector: 'app-topic-online-assessment-list',
  templateUrl: './topic-online-assessment-list.component.html',
  styleUrls: ['./topic-online-assessment-list.component.css']
})
export class TopicOnlineAssessmentListComponent extends subscribedContainerMixin(modalMixin()) {

  @Input() assessments: any[];
  @Input() edit: boolean;
  @Input() courseId: number;
  @Input() topicId: number;

  constructor(private router: Router, private store: Store<AppState>, private onlineAssessmentService: OnlineAssessmentService) {
    super();
  }

  deleteItem(id: number) {
    this.onlineAssessmentService.deleteAssessmentWithId({assessmentId: id, topicId: this.topicId}).pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: () => this.store.dispatch(loadCourses({data: {id: this.courseId}}))
    })
  }

  editItem(examId: number) {
    const confirmNavigation = confirm('You are being redirected to Exams, continue?')
    return confirmNavigation && this.router.navigate(['/academics', 'exam-bank', 'admin', 'exams', examId, 'edit']).then()
  }
}
