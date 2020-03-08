import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStudyMaterialComponent } from './view-study-material.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AddStudyMaterialsTitleModule } from '../../study-materials-admin/add-study-materials-title/add-study-materials-title.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewStudyMaterialComponent],
  imports: [
    CommonModule,
    PdfViewerModule,
    AddStudyMaterialsTitleModule,
    AppLoadingBubbleModule,
    FormsModule
  ],
  exports: [ViewStudyMaterialComponent]
})
export class ViewStudyMaterialModule { }
