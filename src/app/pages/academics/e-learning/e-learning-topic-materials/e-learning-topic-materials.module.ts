import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ELearningTopicMaterialsComponent } from './e-learning-topic-materials.component';
import { RouterModule } from '@angular/router';
import { AppFilesizeModule } from 'src/app/shared/filesize/filesize.module';
import { FileExtensionModule } from 'src/app/shared/file-extention/file-extension.module';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [ELearningTopicMaterialsComponent],
  exports: [ELearningTopicMaterialsComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppFilesizeModule,
    FileExtensionModule,
    ReactiveComponentModule
  ]
})
export class ELearningTopicMaterialsModule { }
