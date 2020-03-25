import { Component, OnInit, OnDestroy } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { StudyMaterialsService } from '../../services/study-materials.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-view-study-material',
  templateUrl: './view-study-material.component.html',
  styleUrls: ['./view-study-material.component.css']
})
export class ViewStudyMaterialComponent implements OnInit, OnDestroy {
  pdf: any;
  outline: any[];
  totalPages: number;
  isLoaded: boolean;
  page = 1;
  pdfSrc: string;
  componentIsActive: boolean;
  studyMaterial$: Observable<any>;
  studyMaterial: any;
  zoom = 1;
  showOutline = true;

  constructor(
    private studyMaterialService: StudyMaterialsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    (window as any).pdfWorkerSrc = '/pdf.worker.js';
    this.pdfSrc = '';
    this.studyMaterial$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.studyMaterialService.getMaterialWithId(id)))
      .pipe(takeWhile(() => this.componentIsActive));
    this.studyMaterial$
      .pipe(tap(studyMaterial => {
        this.studyMaterialService.downloadDocumentWithFilePath(studyMaterial.file_document_info.file_path)
          .pipe(takeWhile(() => this.componentIsActive))
          .subscribe(res => {
            const url = window.URL.createObjectURL(res);

            this.pdfSrc = url;
          })

      }))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
      this.studyMaterial = res;
    });
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
  ngOnDestroy() {
    this.componentIsActive = false;
  }
  zoomIn() {
    this.zoom = Math.max(0, this.zoom - 0.1)
  }
  zoomOut() {
    this.zoom = Math.min(4, this.zoom + 0.1)
  }
  goFullScreen() {
    (document.querySelector('#docSection') as HTMLElement).requestFullscreen();
  }
}
