import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningCourseStudyMaterialRoutingModule } from './e-learning-course-study-material-routing.module';
import { ELearningCourseStudyMaterialComponent } from './e-learning-course-study-material.component';
import { RouterModule } from '@angular/router';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppFilesizeModule } from 'src/app/shared/filesize/filesize.module';
import { FileExtentionModule } from 'src/app/shared/file-extention/file-extention.module';


@NgModule({
  declarations: [ELearningCourseStudyMaterialComponent],
  imports: [
    CommonModule,
    ELearningCourseStudyMaterialRoutingModule,
    RouterModule,
    AppLoadingBubbleModule,
    AppFilesizeModule,
    FileExtentionModule
  ]
})
export class ELearningCourseStudyMaterialModule { }