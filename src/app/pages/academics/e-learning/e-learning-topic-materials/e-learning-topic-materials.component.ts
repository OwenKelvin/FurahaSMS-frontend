import {Component, Input} from '@angular/core';
import {modalMixin} from '../../../../shared/mixins/modal.mixin';
import {Store} from '@ngrx/store';
import {BsModalService} from 'ngx-bootstrap/modal';
import {
  DeleteCourseContentItemComponent
} from '../e-learning-admin/e-learning-edit-course/delete-course-content-item/delete-course-content-item.component';
import {
  EditCourseContentItemComponent
} from '../e-learning-admin/e-learning-edit-course/edit-course-content-item/edit-course-content-item.component';

@Component({
  selector: 'app-e-learning-topic-materials',
  templateUrl: './e-learning-topic-materials.component.html',
  styleUrls: ['./e-learning-topic-materials.component.css']
})
export class ELearningTopicMaterialsComponent extends modalMixin() {
  @Input() learningContents: any[];
  @Input() edit: boolean;
  @Input() courseId: number;
  @Input() topicId: number;

  constructor(store: Store, modalService: BsModalService) {
    super(modalService, store);
  }

  deleteItem(i: number) {
    this.openEditDeleteModal(i, DeleteCourseContentItemComponent);
  }

  editItem(i: number) {
    this.openEditDeleteModal(i, EditCourseContentItemComponent);
  }

  openEditDeleteModal(i: number, component: any) {
    const learningContent = this.learningContents[i];
    this.openModal({
      id: learningContent.id,
      params: {learningContent, courseId: this.courseId, topicId: this.topicId},
      component
    });
  }
}
