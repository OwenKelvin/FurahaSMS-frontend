import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
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
import {ClassLevelUnitLevelAllocationService} from '../../../services/class-level-unit-level-allocation.service';

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
    id: [-1],
    name: ['', Validators.required],
    unit: [null, Validators.required],
    classLevel: [null, Validators.required],
    unitLevel: [null, Validators.required],
    academicYear: [null, Validators.required],
    description: [''],
    topics: this.fb.array([]),
    numbering: ['', Validators.required],
  });
  newTopicForm: FormGroup = this.fb.group({
    id: [-1],
    editItemIndex: [-1],
    numbering: ['', Validators.required],
    name: ['', Validators.required],
    subTopics: this.fb.array([this.fb.control('', [Validators.required])])
  });
  modalRef: BsModalRef;
  numberingStyles$: Observable<any[]> = this.topicNumberingService.all$;
  classLevels$: Observable<any[]> = this.classLevelService.getAllWithUnitLevels();
  topics: any[] = [];
  subTopics: any[] = [];

  courseId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  course$ = this.courseId$.pipe(
    // filter(id => id > 0),
    mergeMap(id => id > 0 ? this.store.pipe(select(selectAcademicsCourse(id))) : of(null)),
    tap(course => {
      if (course && course?.id && course?.id > 0) {
        while (this.topicsControl.length) {
          this.topicsControl.removeAt(0);
        }
        course.topics?.forEach((item, index) => {
          this.topicsControl.push(this.fb.group({
            id: [item.id],
            description: [item.description, [Validators.required]],
            numbering: [item.topic_number_style_name, [Validators.required]],
            subTopics: this.fb.array([])
          }));
          item.sub_topics.forEach((subItem: any) => {
            (this.topicsControl.controls[index].get('subTopics') as FormArray).push(
              this.fb.group({
                id: [subItem.id],
                description: [subItem.description],
              })
            );
          });
        });
        this.newCourseForm.patchValue({
          id: course.id,
          name: course.name,
          unit: course.unitId,
          classLevel: course.classLevelId,
          unitLevel: course.unitLevelId,
          academicYear: course.academicYearId,
          description: course.description,
          numbering: course.topicNumberStyleName,
        });
      }
    }),
    map(() => true)
  );
  classLevelChangedSubject$ = new BehaviorSubject<null | number>(null);
  classLevelChangedAction$ = this.classLevelChangedSubject$.asObservable();
  unitChangedSubject$ = new BehaviorSubject<null | number>(null);
  unitChangedAction$ = this.unitChangedSubject$.asObservable();

  get unitLevelControl(): FormControl {
    return this.newCourseForm.get('unitLevel') as FormControl;
  }

  get classLevelControl(): FormGroup {
    return (this.newCourseForm.get('classLevel') as FormGroup);
  }

  get unitControl(): FormControl {
    return (this.newCourseForm.get('unit') as FormControl);
  }

  unitLevels$ = combineLatest([this.unitChangedAction$, this.classLevelChangedAction$, this.classLevels$]).pipe(
    map(([unit, classLevel, classLevels]) =>
      (classLevels
        .filter(({id}) => id === classLevel)
        .map(({taughtUnits}) => taughtUnits)
        .flat()
        .filter(({unit_id: id}) => id === unit))
    ),
    tap((unitLevels) => {
      if (unitLevels.length === 1) {
        this.unitLevelControl.setValue(unitLevels[0].id);
      } else {
        this.unitLevelControl.setValue(null);
      }
    })
  );

  v$ = combineLatest([this.course$, this.academicYears$, this.units$, this.classLevels$]).pipe(
    map(([course, academicYears, units, classLevels]) => ({course, academicYears, units, classLevels}))
  );

  constructor(
    modalService: BsModalService,
    private fb: FormBuilder,
    private classLevelService: ClassLevelUnitLevelAllocationService,
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
    this.classLevelControl?.valueChanges.pipe(
      tap((id) => this.classLevelChangedSubject$.next(Number(id))),
      takeUntil(this.destroyed$)
    ).subscribe();
    this.unitControl?.valueChanges.pipe(
      tap((id) => this.unitChangedSubject$.next(Number(id))),
      takeUntil(this.destroyed$)
    ).subscribe();
    this.topicsControl.valueChanges.pipe(
      filter(val => JSON.stringify(val) !== JSON.stringify(this.topics)),
      tap(val => this.topics = [...val]),
      takeUntil(this.destroyed$)
    ).subscribe();

    this.subTopicsControl.valueChanges.pipe(
      filter(val => JSON.stringify(val) !== JSON.stringify(this.subTopics)),
      filter(val => val.length === this.subTopics.length),
      tap(val => this.subTopics = [...val]),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  resetNewTopicForm() {
    this.newTopicForm.reset();
    this.subTopicsControl.reset();
    this.subTopics = [{id: -1, description: ''}];
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
        id: patchValue.id,
        editItemIndex: id,
        numbering: patchValue.numbering,
        name: patchValue.description,
      });
      (patchValue.subTopics as any[]).forEach(item => {
        if (item) {
          this.subTopicsControl.push(this.fb.group({
            editItemIndex: [-1],
            id: [item.id],
            description: [item.description, [Validators.required]]
          }));
        }
      });
      this.subTopics = [...this.subTopicsControl.value];
    }
    super.openModal({id, component});
  }

  submitCourseForm() {
    this.submitInProgressSubject$.next(true);
    if (this.newCourseForm.valid) {
      this.eLearningService.saveCourse(this.newCourseForm.value)
        .subscribe({
          next: (res) => this.router.navigate(['academics', 'e-learning', 'courses', res.data?.id]).then(),
          error: () => this.submitInProgressSubject$.next(false),
        });
    } else {
      this.submitInProgressSubject$.next(false);
      this.triggerValidationSubject$.next(true);
    }

  }

  get idTopicControl() {
    return this.newTopicForm.get('id') as FormControl;
  }

  get nameControl() {
    return this.newTopicForm.get('name') as FormControl;
  }

  get numberingControl() {
    return this.newTopicForm.get('numbering') as FormControl;
  }

  addNewTopicCommit() {
    const editedItemIndex = this.newTopicForm.get('editItemIndex')?.value;
    if (editedItemIndex !== -1 && editedItemIndex !== null) {

      const valueLength = this.newTopicSubTopics.value.length;
      while (this.topicsControl.controls[editedItemIndex].get('subTopics')?.value.length > valueLength) {
        (this.topicsControl.controls[editedItemIndex].get('subTopics') as FormArray).removeAt(0);
      }
      while (this.topicsControl.controls[editedItemIndex].get('subTopics')?.value.length < valueLength) {
        (this.topicsControl.controls[editedItemIndex].get('subTopics') as FormArray).push(
          this.fb.group({
            id: [-1],
            description: ['', [Validators.required]],
          })
        );
      }
      this.topicsControl.controls[editedItemIndex].patchValue({
        id: this.idTopicControl.value,
        description: this.nameControl.value,
        numbering: this.numberingControl.value,
        subTopics: this.newTopicSubTopics.value,
      });
    } else {
      this.topicsControl.push(this.fb.group({
        id: [this.idTopicControl.value],
        description: [this.nameControl.value, [Validators.required]],
        numbering: [this.numberingControl.value],
        subTopics: [this.newTopicSubTopics.value],
      }));
    }
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
    this.newTopicSubTopics.push(this.fb.group({
      id: [-1],
      description: ['', [Validators.required]],
    }));
    this.subTopics = [...this.subTopics, {id: -1, description: ''}];
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
    this.topicsControl.updateValueAndValidity();
  }

  updateSubTopicContent() {
    this.subTopics = [...this.subTopics];
  }

  updateSubTopics() {
    this.subTopicsControl.setValue([...this.subTopics]);
    this.subTopicsControl.updateValueAndValidity();
  }

  deleteTopic(index: number) {
    const deletionConfirmed = confirm('Are you sure you wish to delete ');
    if (deletionConfirmed) {
      this.topicsControl.controls.splice(index, 1);
      this.topics.splice(index, 1);
      this.topics = [...this.topics];
      this.topicsControl.updateValueAndValidity();
    }
  }
}
