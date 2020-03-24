import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ELearningTopicMaterialsComponent } from './e-learning-topic-materials.component';
import { RouterModule } from '@angular/router';
import { AppFilesizeModule } from 'src/app/shared/filesize/filesize.module';
import { FileExtentionModule } from 'src/app/shared/file-extention/file-extention.module';



@NgModule({
  declarations: [ELearningTopicMaterialsComponent],
  exports: [ELearningTopicMaterialsComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppFilesizeModule,
    FileExtentionModule
  ]
})
export class ELearningTopicMaterialsModule { }
