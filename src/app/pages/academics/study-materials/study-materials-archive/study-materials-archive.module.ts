import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMaterialsArchiveRoutingModule } from './study-materials-archive-routing.module';
import { StudyMaterialsArchiveComponent } from './study-materials-archive.component';


@NgModule({
  declarations: [StudyMaterialsArchiveComponent],
  imports: [
    CommonModule,
    StudyMaterialsArchiveRoutingModule
  ]
})
export class StudyMaterialsArchiveModule { }
