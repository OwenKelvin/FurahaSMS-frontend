import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningAdminRoutingModule } from './e-learning-admin-routing.module';
import { ELearningAdminComponent } from './e-learning-admin.component';
import { FormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';


@NgModule({
  declarations: [ELearningAdminComponent],
  imports: [
    CommonModule,
    ELearningAdminRoutingModule,
    FormsModule,
    AppLoadingBubbleModule
  ]
})
export class ELearningAdminModule { }
