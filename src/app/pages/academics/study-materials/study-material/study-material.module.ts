import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMaterialRoutingModule } from './study-material-routing.module';
import { ViewStudyMaterialModule } from './view-study-material/view-study-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudyMaterialRoutingModule,
    ViewStudyMaterialModule
  ]
})
export class StudyMaterialModule { }
