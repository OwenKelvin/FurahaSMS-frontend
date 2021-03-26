import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMaterialRoutingModule } from './study-material-routing.module';
import { ViewStudyMaterialModule } from './view-study-material/view-study-material.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudyMaterialRoutingModule,
    ViewStudyMaterialModule,
    ReactiveComponentModule
  ]
})
export class StudyMaterialModule { }
