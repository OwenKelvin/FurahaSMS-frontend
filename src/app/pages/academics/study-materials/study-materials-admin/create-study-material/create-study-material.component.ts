import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsService } from 'src/app/services/units.service';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { mergeMap, takeWhile, map } from 'rxjs/operators';
import { StudyMaterialsService } from '../../services/study-materials.service';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-study-material',
  templateUrl: './create-study-material.component.html',
  styleUrls: ['./create-study-material.component.css']
})
export class CreateStudyMaterialComponent implements OnInit, OnDestroy {
  page = 1;
  totalPages: number;
  isLoaded = false;
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
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.units$ = this.unitService.getAll();
    this.units$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(units => this.units = units);
    this.classLevels$ = this.classLevelService.getAll();
    this.classLevels$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(classLevels => this.classLevels = classLevels);

    (window as any).pdfWorkerSrc = '/pdf.worker.js';
    this.pdfSrc = '';
    this.studyMaterialForm = this.fb.group({
      title: ['', [Validators.required]],
      pdfFile: [null, [Validators.required]],
      units: this.fb.array([], Validators.required),
      classLevels: this.fb.array([], Validators.required)
    });
  }
  onFileSelected() {
    const $pdf: any = document.querySelector('#pdfFile');

    this.pdfFile = (($pdf as HTMLInputElement).files as FileList)[0];

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

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
      .pipe(mergeMap(({ id: docId }) => this.studyMaterialService.saveStudyMaterialInfo({ docId, data: this.studyMaterialForm.value })))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(() => {
        this.isSubmitting = false;
      }, () => this.isSubmitting = false );
  }

  get unitsControl(): FormArray {
    return this.studyMaterialForm.get('units') as FormArray;
  }
  get classLevelsControl(): FormArray {
    return this.studyMaterialForm.get('classLevels') as FormArray;
  }

  updateUnits() {
    setTimeout(() => {
      const filterdUnits = this.units
        .filter((_unit, i) => this.formUnits[i])
        .map(({ id }) => id);
      this.unitsControl.controls.splice(0, this.unitsControl.controls.length);
      filterdUnits.forEach(_ => this.unitsControl.push(this.fb.control('')));
      this.unitsControl.setValue(filterdUnits);
      this.unitsControl.updateValueAndValidity();
    }, 0);

  }
  updateClassLevels() {
    setTimeout(() => {
      const filterdClassLevels = this.classLevels
        .filter((_unit, i) => this.formClassLevels[i])
        .map(({ id }) => id);
      this.classLevelsControl.controls.splice(0, this.classLevelsControl.controls.length);
      filterdClassLevels.forEach(_ => this.classLevelsControl.push(this.fb.control('')));
      this.classLevelsControl.setValue(filterdClassLevels);
      this.classLevelsControl.updateValueAndValidity();
    }, 0);

  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
