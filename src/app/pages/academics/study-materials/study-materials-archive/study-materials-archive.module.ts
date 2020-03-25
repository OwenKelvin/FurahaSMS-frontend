import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMaterialsArchiveRoutingModule } from './study-materials-archive-routing.module';
import { StudyMaterialsArchiveComponent } from './study-materials-archive.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppFilesizeModule } from 'src/app/shared/filesize/filesize.module';
import { ELearningTopicMaterialsModule } from '../../e-learning/e-learning-topic-materials/e-learning-topic-materials.module';
import { FileExtentionModule } from 'src/app/shared/file-extention/file-extention.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StudyMaterialsArchiveComponent],
  imports: [
    CommonModule,
    StudyMaterialsArchiveRoutingModule,
    AppLoadingBubbleModule,
    AppFilesizeModule,
    ELearningTopicMaterialsModule,
    FileExtentionModule,
    FormsModule
  ]
})
export class StudyMaterialsArchiveModule { }
