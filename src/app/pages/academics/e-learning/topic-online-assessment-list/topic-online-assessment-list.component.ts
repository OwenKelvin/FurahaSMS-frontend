import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/reducers';
import {OnlineAssessmentService} from '../services/online-assessment.service';
import {loadCourses} from '../../store/actions/courses.actions';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';
import {takeUntil} from 'rxjs/operators';
import {modalMixin} from '../../../../shared/mixins/modal.mixin';
import {BsModalService} from 'ngx-bootstrap/modal';
import {formMixin} from '../../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-topic-online-assessment-list',
  templateUrl: './topic-online-assessment-list.component.html',
  styleUrls: ['./topic-online-assessment-list.component.css']
})
export class TopicOnlineAssessmentListComponent extends subscribedContainerMixin(formMixin(modalMixin())) {
  @Input() assessments: any[];
  @Input() edit: boolean;
  @Input() courseId: number;
  @Input() topicId: number;
  @ViewChild('deleteConfirmationDialogue') deleteConfirmationDialogue: ElementRef;
  store: Store<AppState>;
  editedItem: { id: number; name: string; ['exam_paper_name']: string };
  contentId: string;

  constructor(
    modalService: BsModalService,
    private router: Router,
    store: Store<AppState>, private onlineAssessmentService: OnlineAssessmentService) {
    super(modalService, store);
    this.store = store;
  }

  deleteItem(id: number) {
    this.editedItem = this.assessments.find(({id: assessmentId}: any) => assessmentId);
    this.openModal({id, component: this.deleteConfirmationDialogue});
    this.modalRef.setClass('modal-md bg-dark text-light modal-container');
  }

  editItem(examId: number) {
    const confirmNavigation = confirm('You are being redirected to Exams, continue?');
    return confirmNavigation && this.router.navigate(['/academics', 'exam-bank', 'admin', 'exams', examId, 'edit']).then();
  }

  deleteAssessmentItem() {
    this.submitInProgressSubject$.next(true);
    this.onlineAssessmentService.deleteAssessmentWithId({assessmentId: this.editedItem.id, topicId: this.topicId}).pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: () => {
        this.store.dispatch(loadCourses({data: {id: this.courseId}}));
        this.submitInProgressSubject$.next(false);
        this.closeModal();
      },
      error: () => this.submitInProgressSubject$.next(false)
    });
  }
}
