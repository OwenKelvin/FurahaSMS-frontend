import {Component, TemplateRef} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {map, mergeMap, takeUntil} from 'rxjs/operators';
import {selectAcademicsCourse} from '../../../store/selectors/courses.selectors';
import {ICourse} from '../../interfaces/course.interface';
import {combineLatest, Observable} from 'rxjs';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ELearningService} from '../../services/e-learning.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudyMaterialsService} from '../../../study-materials/services/study-materials.service';
import {subscribedContainerMixin} from '../../../../../shared/mixins/subscribed-container.mixin';
import {modalMixin} from '../../../../../shared/mixins/modal.mixin';
import {formMixin} from '../../../../../shared/mixins/form.mixin';
import {loadCourses} from '../../../store/actions/courses.actions';

@Component({
  selector: 'app-e-learning-edit-course',
  templateUrl: './e-learning-edit-course.component.html',
  styleUrls: ['./e-learning-edit-course.component.css']
})
export class ELearningEditCourseComponent extends subscribedContainerMixin(modalMixin(formMixin())) {
  newContentUploadForm: FormGroup = this.fb.group({
    description: ['', [Validators.required]],
    content: [null, [Validators.required]],
    topicId: [null, []]
  });

  courseId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id'))))
  course$: Observable<ICourse | null> = this.courseId$.pipe(
    mergeMap(id => this.store.pipe(select(selectAcademicsCourse(id)))),
  );
  v$ = combineLatest([this.course$, this.courseId$]).pipe(
    map(([course, courseId]) => ({course, courseId}))
  );
  courseNameConfirmation: string;
  deletingCourse: boolean;
  savingNewContent: boolean;
  contentType = 'new-content';
  newLearningOutcomeForm: FormGroup = this.fb.group({
    description: ['', [Validators.required]],
    topicId: [null, []]
  });

  constructor(
    private store: Store,
    modalService: BsModalService,
    private route: ActivatedRoute,
    private eLearningService: ELearningService,
    private router: Router,
    private fb: FormBuilder,
    private studyMaterialsService: StudyMaterialsService
  ) {
    super(modalService, store);
  }

  openModalNewContent(template: TemplateRef<any>, topicId: number) {
    this.triggerValidationSubject$.next(false);
    this.newContentUploadForm.get('topicId')?.patchValue(topicId);
    this.newLearningOutcomeForm.get('topicId')?.patchValue(topicId);
    super.openModal({id: topicId, component: template});
  }

  deleteCourse() {
    this.deletingCourse = true;
    this.courseId$.pipe(
      mergeMap(id => this.eLearningService.deleteCourseWithId(id))
    )
      .subscribe({
        next: () => this.router.navigate(['academics/', 'e-learning', 'admin']).then(
          () => this.modalRef.hide()
        )
      });
  }

  saveNewContent() {
    const $pdf: any = document.querySelector('#newContentUploadInput');
    const pdfFile = (($pdf as HTMLInputElement).files as FileList)[0];
    if (this.newContentUploadForm.valid) {
      this.savingNewContent = true;
      const course: any = {};
      const data = {
        title: this.newContentUploadForm.get('description')?.value,
        units: [course.unitId],
        classLevels: [course.classLevelId],
      };
      combineLatest([
        this.courseId$,
        this.studyMaterialsService.uploadDocument(pdfFile)
          .pipe(
            map(({data: uploadRes}: any) => uploadRes.id),
            mergeMap((docId: number) => this.studyMaterialsService.saveStudyMaterialInfo({docId, data})),
            map(({data: studyMatRes}: any) => studyMatRes.id),
            mergeMap((studyMaterialId: any) => this.eLearningService.saveCourseContent({
                studyMaterialId,
                data: {
                  eLearningTopicId: this.newContentUploadForm.get('topicId')?.value
                }
              })
            ),
          )]).pipe(takeUntil(this.destroyed$))
        .subscribe(([courseId]) => {
          // this.getCourses();
          this.savingNewContent = false;
          this.closeModal();
          this.store.dispatch(loadCourses({data: {id: courseId}}))
        }, () => this.savingNewContent = false);
    } else {
      alert('Form is Incomplete');
      this.triggerValidationSubject$.next(true)
    }
  }

  saveLearningOutcome() {
    if (this.newLearningOutcomeForm.valid) {
      this.savingNewContent = true;
      combineLatest([
        this.courseId$,
        this.eLearningService.saveCourseTopicsLearningOutcome(this.newLearningOutcomeForm.value)])
        .pipe(
          map(([courseId, {data: learningOutcome}]) =>
            ({courseId, topicId: Number(this.newLearningOutcomeForm.value.topicId), learningOutcome})
          )
        )
        .subscribe(({courseId}) => {
          // this.store.dispatch(createLearningOutcomeAction({data: {courseId, topicId, learningOutcome}}));
          this.store.dispatch(loadCourses({data: {id: courseId}}))
          this.savingNewContent = false;
          this.modalRef.hide();
        }, () => this.savingNewContent = false);

    } else {
      alert('Form is Incomplete');
      this.triggerValidationSubject$.next(true)
    }
  }

  get activeFormName(): string {
    switch (this.contentType) {
      case 'learning-outcome':

        return 'newLearningOutcomeForm';

      default:
        return 'newContentUploadForm';
    }
  }

  get activeForm(): FormGroup {
    switch (this.contentType) {
      case 'learning-outcome':
        return this.newLearningOutcomeForm;

      default:
        return this.newContentUploadForm;
    }
  }
}
