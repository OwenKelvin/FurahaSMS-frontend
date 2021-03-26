import {Component, Input} from '@angular/core';
import {formMixin} from '../../../../../../shared/mixins/form.mixin';
import {modalMixin} from '../../../../../../shared/mixins/modal.mixin';
import {Store} from '@ngrx/store';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ELearningService} from '../../../services/e-learning.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppState} from 'src/app/store/reducers';
import {loadCourses} from '../../../../store/actions/courses.actions';

interface IStudyMaterialContent {
  ['study_material']: {
    title: string;
    ['study_material_doc']: {
      name: string;
      type: string;
      size: number;
    };
  };
}

@Component({
  selector: 'app-edit-course-content-item',
  templateUrl: './edit-course-content-item.component.html',
  styleUrls: ['./edit-course-content-item.component.css']
})
export class EditCourseContentItemComponent extends formMixin(modalMixin()) {
  @Input() set learningContent(value: IStudyMaterialContent) {
    this.currentLearningContent = value;
    this.itemForm.setValue({
      title: value.study_material.title
    });
  }

  get learningContent(): IStudyMaterialContent {
    return this.currentLearningContent;
  }

  @Input() courseId: number;
  @Input() topicId: number;
  @Input() id: number;
  itemForm: FormGroup = this.fb.group({title: ['', [Validators.required]]});
  store: Store<AppState>;
  private currentLearningContent: IStudyMaterialContent;

  constructor(
    private fb: FormBuilder,
    store: Store<AppState>, modalService: BsModalService, private eLearningService: ELearningService) {
    super(modalService, store);
    this.store = store;
  }

  itemFormSubmit() {
    this.submitInProgressSubject$.next(true);
    this.eLearningService.updateCourseContent({
      topicId: this.topicId,
      contentId: this.id,
      data: {...this.itemForm.value}
    })
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false);
          this.closeModal();
          this.store.dispatch(loadCourses({data: {id: this.courseId}}));
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }
}
