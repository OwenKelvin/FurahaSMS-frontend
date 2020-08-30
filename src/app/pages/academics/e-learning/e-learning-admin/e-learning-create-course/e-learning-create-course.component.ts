import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ClassLevelService} from 'src/app/services/class-level.service';
import {UnitsService} from 'src/app/services/units.service';
import {AcademicYearService} from '../../../services/academic-year.service';
import {ELearningService} from '../../services/e-learning.service';
import {Store} from '@ngrx/store';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {TopicNumberingService} from '../../../services/topic-numbering.service';
import {subscribedContainerMixin} from '../../../../../shared/mixins/subscribed-container.mixin';
import {formWithEditorMixin} from '../../../../../shared/mixins/form-with-editor.mixin';
import {filter, takeUntil, tap} from 'rxjs/operators';
import {modalMixin} from '../../../../../shared/mixins/modal.mixin';

@Component({
  selector: 'app-e-learning-create-course',
  templateUrl: './e-learning-create-course.component.html',
  styleUrls: ['./e-learning-create-course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ELearningCreateCourseComponent
  extends subscribedContainerMixin(modalMixin(formWithEditorMixin())) implements OnInit {
  units$: Observable<any[]> = this.unitsService.getAll();
  academicYears$: Observable<any[]> = this.academicYearService.all$;
  newCourseForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    unit: [null, Validators.required],
    classLevel: [null, Validators.required],
    academicYear: [null, Validators.required],
    description: [''],
    topics: this.fb.array([]),
    numbering: ['', Validators.required],
  });
  newTopicForm: FormGroup = this.fb.group({
    numbering: ['', Validators.required],
    name: ['', Validators.required],
    subTopics: this.fb.array([this.fb.control('', [Validators.required])])
  });
  modalRef: BsModalRef;
  numberingStyles$: Observable<any[]> = this.topicNumberingService.all$;
  classLevels$: Observable<any[]> = this.classLevelService.getAll();
  topics: any[] = [];
  subTopics: any[] = [];

  constructor(
    modalService: BsModalService, store: Store,
    private fb: FormBuilder,
    private classLevelService: ClassLevelService,
    private unitsService: UnitsService,
    private academicYearService: AcademicYearService,
    private eLearningService: ELearningService,
    private topicNumberingService: TopicNumberingService
  ) {
    super(modalService, store);
  }

  get topicsControl() {
    return this.newCourseForm.get('topics') as FormArray;
  }

  get subTopicsControl() {
    return this.newTopicForm.get('subTopics') as FormArray;
  }

  ngOnInit(): void {
    this.resetNewTopicForm();
    this.topicsControl.valueChanges.pipe(
      filter(val => JSON.stringify(val) !== JSON.stringify(this.topics)),
      tap(val => this.topics = [...val]),
      takeUntil(this.destroyed$)
    ).subscribe()

    this.subTopicsControl.valueChanges.pipe(
      filter(val => JSON.stringify(val) !== JSON.stringify(this.subTopics)),
      filter(val => val.length === this.subTopics.length),
      tap(val => this.subTopics = [...val]),
      takeUntil(this.destroyed$)
    ).subscribe()
  }

  resetNewTopicForm() {
    this.newTopicForm.reset();
    this.subTopicsControl.reset();
    this.subTopics = [''];
    while (this.subTopicsControl.length > 1) {
      this.subTopicsControl.removeAt(0);
    }
  }

  openModal({id, component}: { id: number; component: any }) {
    this.resetNewTopicForm();
    if (id !== -1) {
      const patchValue = this.topicsControl.controls[id].value;
      while (this.subTopicsControl.length) {
        this.subTopicsControl.removeAt(0);
      }
      this.newTopicForm.patchValue({
        numbering: patchValue.numberLabel,
        name: patchValue.description,
      });
      (patchValue.subTopics as any[]).forEach(item => {
        this.subTopicsControl.push(this.fb.control(item, [Validators.required]))
      })
      this.subTopics = [...this.subTopicsControl.value];
    }
    super.openModal({id, component});
  }

  submitCourseForm() {
    this.submitInProgressSubject$.next(true);
    if (this.newCourseForm.valid) {
      this.eLearningService.saveCourse(this.newCourseForm.value)
        .subscribe({
          next: () => this.submitInProgressSubject$.next(false),
          error: () => this.submitInProgressSubject$.next(false),
        });
    } else {
      this.submitInProgressSubject$.next(false)
      this.triggerValidationSubject$.next(true)
    }

  }

  get nameControl() {
    return this.newTopicForm.get('name') as FormControl;
  }

  get numberingControl() {
    return this.newTopicForm.get('numbering') as FormControl;
  }

  addNewTopic() {
    if (this.newTopicForm.valid) {
      this.topicsControl.push(this.fb.group({
        description: [this.nameControl.value, [Validators.required]],
        numberLabel: [this.numberingControl.value],
        subTopics: [this.newTopicSubTopics.value],
      }))
      this.topicsControl.updateValueAndValidity();
      this.newCourseForm.updateValueAndValidity();
      this.modalRef.hide();
    } else {
      alert('Please complete form to continue');
    }
  }

  get newTopicSubTopics(): FormArray {
    return this.newTopicForm.get('subTopics') as FormArray;
  }

  addSubTopic() {
    this.newTopicSubTopics.push(this.fb.control('', [Validators.required]));
    this.subTopics = [...this.subTopics, '']
  }

  deleteSubTopic(i: number) {
    const deletionConfirmed = confirm('Do you wish to delete SubTopic?');
    if (deletionConfirmed) {
      this.newTopicSubTopics.controls.splice(i, 1);
      this.subTopics.splice(i, 1);
      this.subTopics = [...this.subTopics];
      this.newTopicSubTopics.updateValueAndValidity();
    }
  }

  updateTopics() {
    this.topicsControl.setValue([...this.topics]);
  }

  updateSubTopicContent() {
    this.subTopics = [...this.subTopics];
  }

  updateSubTopics() {
    this.subTopicsControl.setValue([...this.subTopics]);
    this.subTopicsControl.updateValueAndValidity();
  }
}
