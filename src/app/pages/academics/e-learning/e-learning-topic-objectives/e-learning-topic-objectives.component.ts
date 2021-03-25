import {Component, Input, TemplateRef} from '@angular/core';
import {modalMixin} from '../../../../shared/mixins/modal.mixin';
import {formMixin} from '../../../../shared/mixins/form.mixin';
import {Store} from '@ngrx/store';
import {BsModalService} from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ELearningService} from '../services/e-learning.service';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';
import {takeUntil} from 'rxjs/operators';
import {loadCourses} from '../../store/actions/courses.actions';
import {
  ELearningDeleteLearningOutcomeComponent
} from '../e-learning-admin/e-learning-delete-learning-outcome/e-learning-delete-learning-outcome.component';

@Component({
  selector: 'app-e-learning-topic-objectives',
  templateUrl: './e-learning-topic-objectives.component.html',
  styleUrls: ['./e-learning-topic-objectives.component.css']
})
export class ELearningTopicObjectivesComponent extends subscribedContainerMixin(modalMixin(formMixin())) {

  @Input() courseId: number;
  @Input() edit: boolean;
  @Input() topicId: number;
  @Input() topicNumberStyleName: string;
  @Input() learningOutcomes: any[];
  itemForm: FormGroup = this.fb.group({
    id: [null, [Validators.required]],
    description: ['', [Validators.required]]
  });
  store: any;

  constructor(modalService: BsModalService, store: Store, private fb: FormBuilder, private eLearningService: ELearningService) {
    super(modalService, store);
    this.store = store;
  }

  editLearningOutcome({id, component}: { id: number; component: TemplateRef<any> }) {
    this.itemForm.patchValue({
      id: this.learningOutcomes[id].id,
      description: this.learningOutcomes[id].description,
    });
    this.openModal({id, component});
  }

  saveLearningOutcome() {
    this.submitInProgressSubject$.next(true);
    this.eLearningService.updateCourseTopicsLearningOutcome({
      description: this.itemForm.value.description,
      learningOutcomeId: this.itemForm.value.id,
      topicId: this.topicId
    }).pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false);
          this.closeModal();
          this.store.dispatch(loadCourses({data: {id: this.courseId}}));
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }

  deleteLearningOutcome(i: number) {
    this.openModal({
      id: this.learningOutcomes[i].id,
      component: ELearningDeleteLearningOutcomeComponent,
      params: {description: this.learningOutcomes[i].description, topicId: this.topicId, courseId: this.courseId}
    });
  }
}
