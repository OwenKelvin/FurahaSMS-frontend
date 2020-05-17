import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap, tap, takeWhile } from 'rxjs/operators';
import { selectAcademicsCourse } from '../../../store/selectors/courses.selectors';
import { ICourse } from '../../interfaces/course.interface';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ELearningService } from '../../services/e-learning.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudyMaterialsService } from '../../../study-materials/services/study-materials.service';

@Component({
  selector: 'app-e-learning-edit-course',
  templateUrl: './e-learning-edit-course.component.html',
  styleUrls: ['./e-learning-edit-course.component.css']
})
export class ELearningEditCourseComponent implements OnInit, OnDestroy {
  course$: Observable<ICourse | null>;
  course: ICourse | null;
  modalRef: BsModalRef;
  courseNameConfirmation: string;
  componentIsActive = true;
  deletingCourse: boolean;
  newContentUploadForm: FormGroup;
  triggerNewContentValidation: boolean;
  savingNewContent: boolean;

  contentType = 'new-content';
  newLearningOutcomeForm: FormGroup;
  triggerLearningOutcomeValidation: boolean;
  componentLoaded: boolean;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private eLearningService: ELearningService,
    private router: Router,
    private fb: FormBuilder,
    private studyMaterialsService: StudyMaterialsService
  ) { }

  ngOnInit(): void {
    this.getCourses();
    this.resetNewContentForm();
  }

  getCourses() {
    this.course$ = (this.route.parent as ActivatedRoute).paramMap
      .pipe(
        map(params => Number(params.get('id'))),
        mergeMap(id => this.store.pipe(select(selectAcademicsCourse(id)))),
        tap((res) => this.course = res));
  }
  resetNewContentForm(topicId?: number) {
    this.newContentUploadForm = this.fb.group({
      description: ['', [Validators.required]],
      content: [null, [Validators.required]],
      topicId: [topicId, []]
    });
    this.newLearningOutcomeForm = this.fb.group({
      description: ['', [Validators.required]],
      topicId: [topicId, []]
    });
  }
  openModal(template: TemplateRef<any>) {
    this.courseNameConfirmation = '';
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
  }
  openModalNewContent(template: TemplateRef<any>, topicId: number) {
    this.resetNewContentForm(topicId);
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
  }
  deleteCourse() {
    this.deletingCourse = true;
    const course: any = this.course ? this.course : {};
    this.eLearningService.deleteCourseWithId(course.id)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(() => {
        this.modalRef.hide();
        this.router.navigate(['academics/', 'e-learning', 'admin']);
      });
  }
  saveNewContent() {
    this.componentLoaded = true;
    const $pdf: any = document.querySelector('#newContentUploadInput');
    const pdfFile = (($pdf as HTMLInputElement).files as FileList)[0];
    if (this.newContentUploadForm.valid) {
      this.savingNewContent = true;
      const course: any = this.course ? this.course : {};
      const data = {
        title: this.newContentUploadForm.get('description')?.value,
        units: [course.unitId],
        classLevels: [course.classLevelId],
      };

      this.studyMaterialsService.uploadDocument(pdfFile)
        .pipe(
          map(({ data: uploadRes }: any) => uploadRes.id),
          mergeMap((docId: number) => this.studyMaterialsService.saveStudyaterialInfo({ docId, data })),
          map(({ data: studyMatRes }: any) => studyMatRes.id),
          mergeMap((studyMaterialId: any) => this.eLearningService.saveCourseContent({
              studyMaterialId,
              data: {
                eLearningTopicId: this.newContentUploadForm.get('topicId')?.value
              }
            })
          ),
          takeWhile(() => this.componentIsActive))
        .subscribe(() => {
          // this.course$.pipe(takeWhile(() => this.componentIsActive)).subscribe();
          this.getCourses();
          this.savingNewContent = false;
          this.modalRef.hide();
        }, () => this.savingNewContent = false);
    } else {
      alert('Form is Incomplete');
      this.triggerNewContentValidation = true;
    }
  }

  saveLearningOutcome() {
    if (this.newLearningOutcomeForm.valid) {
      this.savingNewContent = true;
      this.eLearningService.saveCourseTopicsLearningOutcome(this.newLearningOutcomeForm.value)
        .subscribe(() => {
          this.getCourses();
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
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
