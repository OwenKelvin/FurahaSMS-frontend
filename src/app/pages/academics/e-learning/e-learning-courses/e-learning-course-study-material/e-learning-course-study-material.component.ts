import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudyMaterialsService } from '../../../study-materials/services/study-materials.service';
import { map, mergeMap, takeWhile, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin, zip, of, EMPTY, merge } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectAcademicsCourse } from '../../../store/selectors/courses.selectors';
import { ICourse } from '../../interfaces/course.interface';

@Component({
  selector: 'app-e-learning-course-study-material',
  templateUrl: './e-learning-course-study-material.component.html',
  styleUrls: ['./e-learning-course-study-material.component.css']
})
export class ELearningCourseStudyMaterialComponent implements OnInit, OnDestroy {
  componentIsActive: boolean;
  docSrc: string | undefined;
  studyMaterial$: Observable<any>;
  studyMaterial: any;
  course: ICourse | null | undefined;
  course$: Observable<ICourse | null> | undefined;


  constructor(
    private route: ActivatedRoute,
    private studyMaterialService: StudyMaterialsService,
    private store: Store
  ) { }

  ngOnInit() {
    this.componentIsActive = true;

    this.course$ = this.route.parent?.parent?.parent?.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.store.pipe(select(selectAcademicsCourse(id)))))
      .pipe(tap((res) => this.course = res))
      .pipe(takeWhile(() => this.componentIsActive));

    this.studyMaterial$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.studyMaterialService.getMaterialWithId(id)))
      .pipe(tap((res) => this.studyMaterial = res))
      .pipe(
        mergeMap((studyMaterial: any) => this.studyMaterialService
          .downloadDocumentWithFilePath(studyMaterial.file_document_info.file_path))
      )
      .pipe(tap((res) => {
        const url = window.URL.createObjectURL(res);
        this.docSrc = url;
      }))
      .pipe(takeWhile(() => this.componentIsActive));

    this.course$?.subscribe();
    this.studyMaterial$?.subscribe();

  }
  downloadFIle() {
    return window.open(this.docSrc);
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
