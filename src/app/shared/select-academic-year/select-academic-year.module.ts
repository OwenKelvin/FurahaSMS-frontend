import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectAcademicYearComponent} from './select-academic-year.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {RouterModule} from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [SelectAcademicYearComponent],
  imports: [
    CommonModule,
    AppLoadingBubbleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgSelectModule,
    ReactiveComponentModule
  ],
  exports: [SelectAcademicYearComponent]
})
export class SelectAcademicYearModule {
}
