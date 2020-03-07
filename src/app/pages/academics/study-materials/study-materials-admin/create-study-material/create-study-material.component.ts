import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsService } from 'src/app/services/units.service';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { mergeMap, takeWhile, map, tap } from 'rxjs/operators';
import { StudyMaterialsService } from '../../services/study-materials.service';

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
  classLevels$: Observable<any>;
  pdfSrc: string;
  pdf: PDFDocumentProxy;
  outline: any[];
  isSubmitting: boolean;
  componentIsActive: boolean;
  pdfFile: File;
  constructor(
    private unitService: UnitsService,
    private classLevelService: ClassLevelService,
    private studyMaterialService: StudyMaterialsService
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.units$ = this.unitService.getAll();
    this.classLevels$ = this.classLevelService.getAll();
    (<any>window).pdfWorkerSrc = '/pdf.worker.js';

    this.pdfSrc = "";
    // this.pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
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
      .pipe(mergeMap(({ id: docId }) => this.studyMaterialService.saveStudyaterialInfo({ docId })))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        this.isSubmitting = false;
      }, err => this.isSubmitting = false );
  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
