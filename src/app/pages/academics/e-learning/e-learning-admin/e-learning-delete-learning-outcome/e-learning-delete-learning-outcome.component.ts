import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {BsModalService} from 'ngx-bootstrap/modal';
import {modalMixin} from '../../../../../shared/mixins/modal.mixin';
import {formMixin} from '../../../../../shared/mixins/form.mixin';
import {ELearningService} from '../../services/e-learning.service';
import {loadCourses} from '../../../store/actions/courses.actions';

@Component({
  selector: 'app-e-learning-delete-learning-outcome',
  templateUrl: './e-learning-delete-learning-outcome.component.html',
  styleUrls: ['./e-learning-delete-learning-outcome.component.css']
})
export class ELearningDeleteLearningOutcomeComponent extends formMixin(modalMixin()) {
  @Input() id: number;
  @Input() topicId: number;
  @Input() courseId: number;
  @Input() description: string;
  store: Store;
  learningOutcomeIdConfirmation = '';

  constructor(store: Store, modalService: BsModalService, private eLearningService: ELearningService) {
    super(modalService, store);
    this.store = store;
  }

  deleteLearningOutcome() {
    this.submitInProgressSubject$.next(true);
    this.eLearningService.deleteCourseTopicsLearningOutcome({topicId: this.topicId, learningOutcomeId: this.id})
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false);
          this.closeModal();
          this.store.dispatch(loadCourses({ data: { id: this.courseId }}));
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }
}
