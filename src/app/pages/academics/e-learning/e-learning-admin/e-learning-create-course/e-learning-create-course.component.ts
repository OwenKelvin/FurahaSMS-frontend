import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {ClassLevelService} from 'src/app/services/class-level.service';
import {UnitsService} from 'src/app/services/units.service';
import {AcademicYearService} from '../../../services/academic-year.service';
import {ELearningService} from '../../services/e-learning.service';
import {select, Store} from '@ngrx/store';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {TopicNumberingService} from '../../../services/topic-numbering.service';
import {subscribedContainerMixin} from '../../../../../shared/mixins/subscribed-container.mixin';
import {formWithEditorMixin} from '../../../../../shared/mixins/form-with-editor.mixin';
import {filter, map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {modalMixin} from '../../../../../shared/mixins/modal.mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {selectAcademicsCourse} from '../../../store/selectors/courses.selectors';

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
    id: [0],
    name: ['', Validators.required],
    unit: [null, Validators.required],
    classLevel: [null, Validators.required],
    academicYear: [null, Validators.required],
    description: [''],
    topics: this.fb.array([]),
    numbering: ['', Validators.required],
  });
  newTopicForm: FormGroup = this.fb.group({
    numbering: ['TT', Validators.required],
    name: ['TT', Validators.required],
    subTopics: this.fb.array([this.fb.control('', [Validators.required])])
  });
  modalRef: BsModalRef;
  numberingStyles$: Observable<any[]> = this.topicNumberingService.all$;
  classLevels$: Observable<any[]> = this.classLevelService.getAll();
  topics: any[] = [];
  subTopics: any[] = [];

  courseId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  course$ = this.courseId$.pipe(
    mergeMap(id => id > 0 ? this.store.pipe(select(selectAcademicsCourse(id))) : of(null)),
    tap(course => {
      if (course && course?.id && course?.id > 0) {
        course?.topics?.forEach(item => {
          this.newTopicForm.patchValue({
            name: item.description,
            numbering: item.topic_number_style_name,
            // subTopics: [item.sub_topics.map(({description}: any) => description)]
            // subTopics: item.sub_topics.map(({description}: any) => description)
          });
          this.addNewTopicCommit();
          while (this.subTopicsControl.length) {
            this.subTopicsControl.removeAt(0);
          }
          item.sub_topics.forEach(() => {
            this.addSubTopic()
          });
          this.subTopicsControl.setValue(item.sub_topics.map(({description}: any) => description))
        })
        this.newCourseForm.patchValue({
          id: course.id,
          name: course.name,
          unit: course.unitId,
          classLevel: course.classLevelId,
          academicYear: course.academicYearId,
          description: course.description,
          numbering: course.topicNumberStyleName,
        })
      }
    }),
    map(() => true)
  );

  constructor(
    modalService: BsModalService,
    private fb: FormBuilder,
    private classLevelService: ClassLevelService,
    private unitsService: UnitsService,
    private academicYearService: AcademicYearService,
    private eLearningService: ELearningService,
    private topicNumberingService: TopicNumberingService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
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
          next: (res) => this.router.navigate(['academics', 'e-learning', 'courses', res.data.id]).then(),
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

  addNewTopicCommit() {
    this.topicsControl.push(this.fb.group({
      description: [this.nameControl.value, [Validators.required]],
      numberLabel: [this.numberingControl.value],
      subTopics: [this.newTopicSubTopics.value],
    }))
    this.topicsControl.updateValueAndValidity();
    this.newCourseForm.updateValueAndValidity();
  }

  addNewTopic() {
    if (this.newTopicForm.valid) {
      this.addNewTopicCommit();
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
