import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { UnitsService } from 'src/app/services/units.service';
import { AcademicYearService } from '../../../services/academic-year.service';
import { ELearningService } from '../../services/e-learning.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Store, select } from '@ngrx/store';
import { selectTinyMceConfig } from 'src/app/store/selectors/tinyMCE-config.selector';
import { takeWhile } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TopicNumberingService } from '../../../services/topic-numbering.service';

@Component({
  selector: 'app-e-learning-create-course',
  templateUrl: './e-learning-create-course.component.html',
  styleUrls: ['./e-learning-create-course.component.css']
})
export class ELearningCreateCourseComponent implements OnInit, OnDestroy {
  triggerValidation: boolean;
  isSubmitting: boolean;
  classLevels$: Observable<any[]>;
  units$: Observable<any[]>;
  academicYears$: Observable<any[]>;
  editorInit$: Observable<any>;
  editorInitialized: boolean;
  componentIsActive = true;
  editorInit: any;
  newCourseForm: FormGroup;
  newTopicForm: FormGroup;
  modalRef: BsModalRef;
  numberingStyles$: Observable<any>;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private classLevelervice: ClassLevelService,
    private unitsService: UnitsService,
    private academicYearService: AcademicYearService,
    private eLearningService: ELearningService,
    private modalService: BsModalService,
    private topicNumberungService: TopicNumberingService
  ) { }

  get topicsControl() {
    return this.newCourseForm.get('topics') as FormArray;
  }
  ngOnInit(): void {
    this.numberingStyles$ = this.topicNumberungService.getAll();
    this.resetNewTopicForm();
    this.newCourseForm = this.fb.group({
      name: ['', Validators.required],
      unit: [null, Validators.required],
      classLevel: [null, Validators.required],
      academicYear: [null, Validators.required],
      description: [''],
      topics: this.fb.array([]),
      numbering: ['', Validators.required],
    });
    this.classLevels$ = this.classLevelervice.getAll();
    this.units$ = this.unitsService.getAll();
    this.academicYears$ = this.academicYearService.getAll();
    this.editorInit$ = this.store.pipe(select(selectTinyMceConfig));
    this.editorInit$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(conf => { this.editorInit = conf; });
  }
  resetNewTopicForm() {
    this.newTopicForm = this.fb.group({
      numbering: ['', Validators.required],
      name: ['', Validators.required],
      subTopics: this.fb.array([this.fb.control('', [Validators.required])])
    });
  }
  openModal(template: TemplateRef<any>) {
    this.resetNewTopicForm();
    const config = {
      backdrop: false,
      ignoreBackdropClick: true
    };
    this.modalRef = this.modalService.show(template, config);

    this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
  }
  submitCourseForm() {
    this.isSubmitting = true;
    if (this.newCourseForm.valid) {
      this.eLearningService.saveCourse(this.newCourseForm.value)
        .subscribe(res => {
          this.isSubmitting = false;
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastBody: res.message,
            toastHeader: 'Success!',
            toastTime: 'Just now'
          }));
        }, () => {
          this.isSubmitting = false;
        });
    } else {
      this.isSubmitting = false;
      this.triggerValidation = !this.triggerValidation;
    }

  }
  addNewTopic() {
    if (this.newTopicForm.valid) {
      this.topicsControl.push(this.fb.group({
        description: [this.newTopicForm.get('name').value, [Validators.required]],
        numberLabel: [this.newTopicForm.get('numbering').value],
        subTopics: [this.newTopicForm.get('subTopics').value],
      }))
      this.modalRef.hide();
    } else {
      alert('Please complete form to continue');
    }
  }
  get newTopicSubTopics(): FormArray {
    return this.newTopicForm.get('subTopics') as FormArray;
  }
  addSubTopic() {
    this.newTopicSubTopics.push(this.fb.control('', [Validators.required]))
  }
  deleteSubTopic(i: number) {
    const deletionConfirmed = confirm('Do you wish to delete SubTopic?');
    if (deletionConfirmed) {
      this.newTopicSubTopics.controls.splice(i, 1);
      this.newTopicSubTopics.updateValueAndValidity();
    }

  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
