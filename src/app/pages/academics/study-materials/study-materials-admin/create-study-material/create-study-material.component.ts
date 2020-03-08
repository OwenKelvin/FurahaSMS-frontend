import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsService } from 'src/app/services/units.service';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { mergeMap, takeWhile, map, tap } from 'rxjs/operators';
import { StudyMaterialsService } from '../../services/study-materials.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-study-material',
  templateUrl: './create-study-material.component.html',
  styleUrls: ['./create-study-material.component.css']
})
export class CreateStudyMaterialComponent implements OnInit, OnDestroy {
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  units$: Observable<any>;
  units: any[];
  classLevels$: Observable<any>;
  classLevels: any[];
  formClassLevels = [false];
  pdfSrc: string;
  pdf: PDFDocumentProxy;
  outline: any[];
  isSubmitting: boolean;
  componentIsActive: boolean;
  pdfFile: File;
  studyMaterialForm: FormGroup;
  formUnits = [false];
  triggerValidation: boolean;
  constructor(
    private unitService: UnitsService,
    private classLevelService: ClassLevelService,
    private studyMaterialService: StudyMaterialsService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.units$ = this.unitService.getAll();
    this.units$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(units => this.units = units)
    this.classLevels$ = this.classLevelService.getAll();
    this.classLevels$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(classLevels => this.classLevels = classLevels);
    
    (<any>window).pdfWorkerSrc = '/pdf.worker.js';
    this.pdfSrc = "";
    this.studyMaterialForm = this.fb.group({
      title: ['', [Validators.required]],
      pdfFile: [null, [Validators.required]],
      units: this.fb.array([], Validators.required),
      classLevels: this.fb.array([], Validators.required)
    })
  }
  onFileSelected() {
    let $pdf: any = document.querySelector('#pdfFile');

    this.pdfFile = ($pdf as HTMLInputElement).files[0];

    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
      reader.readAsArrayBuffer(this.pdfFile);
    }
  }

  loadOutline() {

    this.pdf.getOutline().then((outline: any[]) => {
      this.outline = outline;
    });
  }
  afterLoadComplete(pdf: PDFDocumentProxy) {

    this.pdf = pdf;
    this.totalPages = pdf.numPages;
    this.isLoaded = true;
    this.loadOutline();
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
  saveStudyMaterial() {
    this.isSubmitting = true;
    this.studyMaterialService.uploadDocument(this.pdfFile)
      .pipe(map(({ data }) => data))
      .pipe(mergeMap(({ id: docId }) => this.studyMaterialService.saveStudyaterialInfo({ docId, data: this.studyMaterialForm.value })))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastBody: res.message,
          toastHeader: 'Success',
          toastTime: 'Just Now'
        }));
        this.isSubmitting = false;
      }, err => this.isSubmitting = false );
  }
  
  updateUnits() {
    setTimeout(() => { 
      let filterdUnits = this.units
        .filter((unit, i) => this.formUnits[i])
        .map(({ id }) => id);
      (this.studyMaterialForm.get('units') as FormArray).controls.splice(0, (this.studyMaterialForm.get('units') as FormArray).controls.length)
      filterdUnits.forEach(_ => (this.studyMaterialForm.get('units') as FormArray).push(this.fb.control('')))
      this.studyMaterialForm.get('units').setValue(filterdUnits);
      this.studyMaterialForm.get('units').updateValueAndValidity();
    }, 0)
    
  }
  updateClassLevels() {
    setTimeout(() => {
      let filterdClassLevels = this.classLevels
        .filter((unit, i) => this.formClassLevels[i])
        .map(({ id }) => id);
      (this.studyMaterialForm.get('classLevels') as FormArray).controls.splice(0, (this.studyMaterialForm.get('classLevels') as FormArray).controls.length);
      filterdClassLevels.forEach(_ => (this.studyMaterialForm.get('classLevels') as FormArray).push(this.fb.control('')));
      this.studyMaterialForm.get('classLevels').setValue(filterdClassLevels);
      this.studyMaterialForm.get('classLevels').updateValueAndValidity();
    }, 0);

  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
