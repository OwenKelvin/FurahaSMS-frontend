import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAcademicYearComponent } from './select-academic-year.component';
import { LoadingBubbleComponent } from 'src/app/components/loading-bubble/loading-bubble.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SelectAcademicYearComponent],
  imports: [
    CommonModule,
    AppLoadingBubbleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [SelectAcademicYearComponent]
})
export class SelectAcademicYearModule { }
