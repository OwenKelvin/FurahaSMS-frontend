import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMaterialsArchiveRoutingModule } from './study-materials-archive-routing.module';
import { StudyMaterialsArchiveComponent } from './study-materials-archive.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppFilesizeModule } from 'src/app/shared/filesize/filesize.module';


@NgModule({
  declarations: [StudyMaterialsArchiveComponent],
  imports: [
    CommonModule,
    StudyMaterialsArchiveRoutingModule,
    AppLoadingBubbleModule,
    AppFilesizeModule
  ]
})
export class StudyMaterialsArchiveModule { }
