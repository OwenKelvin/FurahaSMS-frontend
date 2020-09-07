import {Component, OnInit, TemplateRef} from '@angular/core';
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

@Component({
  selector: 'app-e-learning-edit-course',
  templateUrl: './e-learning-edit-course.component.html',
  styleUrls: ['./e-learning-edit-course.component.css']
})
export class ELearningEditCourseComponent extends subscribedContainerMixin(modalMixin(formMixin())) implements OnInit {
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
  triggerLearningOutcomeValidation: boolean;

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

  ngOnInit(): void {
    // this.getCourses();
    // this.resetNewContentForm();
  }

  // getCourses() {
  //   this.course$ = (this.route.parent as ActivatedRoute).paramMap
  //     .pipe(
  //       map(params => Number(params.get('id'))),
  //       mergeMap(id => this.store.pipe(select(selectAcademicsCourse(id)))),
  //       tap((res) => this.course = res));
  // }

  resetNewContentForm() { // topicId?: number

    // this.newContentUploadForm = this.fb.group({
    //   description: ['', [Validators.required]],
    //   content: [null, [Validators.required]],
    //   topicId: [topicId, []]
    // });
    // this.newLearningOutcomeForm = this.fb.group({
    //   description: ['', [Validators.required]],
    //   topicId: [topicId, []]
    // });
  }

  // openModal(template: TemplateRef<any>) {
  //   this.courseNameConfirmation = '';
  //   this.modalRef = this.modalService.show(template);
  //   this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
  // }

  openModalNewContent(template: TemplateRef<any>, topicId: number) {
    this.newContentUploadForm.get('topicId')?.patchValue(topicId)
    this.newLearningOutcomeForm.get('topicId')?.patchValue(topicId)
    super.openModal({id: topicId, component: template})
    // this.resetNewContentForm(topicId);
    // this.modalRef = this.modalService.show(template);
    // this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
  }

  deleteCourse() {
    this.deletingCourse = true;
    // const course: any = this.course ? this.course : {};
    // const course: any = {};
    this.courseId$.pipe(
      mergeMap(id => this.eLearningService.deleteCourseWithId(id))
      )
      .subscribe({
        next: () => {
          this.modalRef.hide();
          this.router.navigate(['academics/', 'e-learning', 'admin']).then();
        }
      });
    // this.eLearningService.deleteCourseWithId(course.id)
    //   .subscribe({
    //     next: () => {
    //       this.modalRef.hide();
    //       this.router.navigate(['academics/', 'e-learning', 'admin']).then();
    //     }
    //   });
  }

  saveNewContent() {
    const $pdf: any = document.querySelector('#newContentUploadInput');
    const pdfFile = (($pdf as HTMLInputElement).files as FileList)[0];
    if (this.newContentUploadForm.valid) {
      this.savingNewContent = true;
      const course: any = {};
      // const course: any = this.course ? this.course : {};
      const data = {
        title: this.newContentUploadForm.get('description')?.value,
        units: [course.unitId],
        classLevels: [course.classLevelId],
      };

      this.studyMaterialsService.uploadDocument(pdfFile)
        .pipe(
          map(({data: uploadRes}: any) => uploadRes.id),
          mergeMap((docId: number) => this.studyMaterialsService.saveStudyaterialInfo({docId, data})),
          map(({data: studyMatRes}: any) => studyMatRes.id),
          mergeMap((studyMaterialId: any) => this.eLearningService.saveCourseContent({
              studyMaterialId,
              data: {
                eLearningTopicId: this.newContentUploadForm.get('topicId')?.value
              }
            })
          ),
          takeUntil(this.destroyed$))
        .subscribe(() => {
          // this.getCourses();
          this.savingNewContent = false;
          this.modalRef.hide();
        }, () => this.savingNewContent = false);
    } else {
      alert('Form is Incomplete');
      this.triggerValidationSubject$.next(true)
    }
  }

  saveLearningOutcome() {
    if (this.newLearningOutcomeForm.valid) {
      this.savingNewContent = true;
      this.eLearningService.saveCourseTopicsLearningOutcome(this.newLearningOutcomeForm.value)
        .subscribe(() => {
          // this.getCourses();
          this.savingNewContent = false;
          this.modalRef.hide();
        }, () => this.savingNewContent = false);

    } else {
      alert('Form is Incomplete');
      this.triggerLearningOutcomeValidation = true;
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
