import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudyMaterialsTitleComponent } from './add-study-materials-title.component';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [
    AddStudyMaterialsTitleComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ],
  exports: [
    AddStudyMaterialsTitleComponent
  ]
})
export class AddStudyMaterialsTitleModule { }
