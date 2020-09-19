import {Component, Input} from '@angular/core';
import {formMixin} from '../../../../../../shared/mixins/form.mixin';
import {modalMixin} from '../../../../../../shared/mixins/modal.mixin';
import {Store} from '@ngrx/store';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ELearningService} from '../../../services/e-learning.service';
import {loadCourses} from '../../../../store/actions/courses.actions';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-course-content-item',
  templateUrl: './edit-course-content-item.component.html',
  styleUrls: ['./edit-course-content-item.component.css']
})
export class EditCourseContentItemComponent extends formMixin(modalMixin()) {
  store: Store;
  contentId = '';
  @Input() id: number;

  constructor(
    private fb: FormBuilder,
    store: Store, modalService: BsModalService, private eLearningService: ELearningService) {
    super(modalService, store);
    this.store = store;
  }

  itemForm: FormGroup = this.fb.group({})

  updateLearningOutcome() {
    this.submitInProgressSubject$.next(true)
    this.eLearningService.deleteCourseContent({topicId: 0, contentId: this.id})
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false);
          this.closeModal();
          // this.store.dispatch(loadCourses({data: {id: this.courseId}}))
        },
        error: () => this.submitInProgressSubject$.next(false)
      })
  }
}
