import {Component} from '@angular/core';
import {StudyMaterialsService} from '../../../study-materials/services/study-materials.service';
import {map, mergeMap, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectAcademicsCourse} from '../../../store/selectors/courses.selectors';
import {ICourse} from '../../interfaces/course.interface';

@Component({
  selector: 'app-e-learning-course-study-material',
  templateUrl: './e-learning-course-study-material.component.html',
  styleUrls: ['./e-learning-course-study-material.component.css']
})
export class ELearningCourseStudyMaterialComponent {
  docSrc: string | undefined;
  studyMaterial: any;
  course: ICourse | null | undefined;

  docId$: Observable<number> = (
    (
      (this.route.parent as ActivatedRoute)
        .parent as ActivatedRoute)
      .parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );

  course$: Observable<ICourse | null> = this.docId$.pipe(
    mergeMap(id => this.store.pipe(select(selectAcademicsCourse(id)))),
    tap((res) => this.course = res),
  );

  studyMaterial$: Observable<any> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(id => this.studyMaterialService.getMaterialWithId(id)),
    tap((res) => this.studyMaterial = res),
    mergeMap((studyMaterial: any) => this.studyMaterialService
      .downloadDocumentWithFilePath(studyMaterial.file_document_info.file_path)),
    tap((res) => {
      this.docSrc = window.URL.createObjectURL(res);
    }),
  );

  v$ = combineLatest([this.course$, this.studyMaterial$]);

  constructor(
    private route: ActivatedRoute,
    private studyMaterialService: StudyMaterialsService,
    private store: Store
  ) {
  }

  downloadFIle = () => window.open(this.docSrc);
}
