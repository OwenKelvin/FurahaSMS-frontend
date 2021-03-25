import {Component, OnInit} from '@angular/core';
import {PDFDocumentProxy} from 'ng2-pdf-viewer';
import {StudyMaterialsService} from '../../services/study-materials.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-view-study-material',
  templateUrl: './view-study-material.component.html',
  styleUrls: ['./view-study-material.component.css']
})
export class ViewStudyMaterialComponent extends subscribedContainerMixin() implements OnInit {
  pdf: any;
  outline: any[];
  totalPages: number;
  isLoaded: boolean;
  page = 1;
  pdfSrc = '';
  studyMaterial$: Observable<any> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(id => this.studyMaterialService.getMaterialWithId(id)),
    takeUntil(this.destroyed$));
  studyMaterial: any;
  zoom = 1;
  showOutline = true;

  constructor(
    private studyMaterialService: StudyMaterialsService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    // alert('got you');
    (window as any).pdfWorkerSrc = '/pdf.worker.js';
    this.studyMaterial$.pipe(
      tap(studyMaterial => {
        this.studyMaterialService.downloadDocumentWithFilePath(studyMaterial.file_document_info.file_path)
          .pipe(takeUntil(this.destroyed$))
          .subscribe(res => {
            this.pdfSrc = window.URL.createObjectURL(res);
          });
      }))
      .pipe(takeUntil(this.destroyed$))
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

  zoomIn() {
    this.zoom = Math.max(0, this.zoom - 0.1);
  }

  zoomOut() {
    this.zoom = Math.min(4, this.zoom + 0.1);
  }

  goFullScreen() {
    (document.querySelector('#docSection') as HTMLElement).requestFullscreen().then();
  }

}
