import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRecentlyCreatedComponent } from './students-recently-created.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    StudentsRecentlyCreatedComponent
  ],
  imports: [
    CommonModule,
    AppLoadingBubbleModule,
    RouterModule,
    ReactiveComponentModule
  ],
  exports: [
    StudentsRecentlyCreatedComponent
  ]
})
export class AppRecentlyCreatedStudent { }
