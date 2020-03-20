import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningAdminRoutingModule } from './e-learning-admin-routing.module';
import { ELearningAdminComponent } from './e-learning-admin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ELearningAdminComponent],
  imports: [
    CommonModule,
    ELearningAdminRoutingModule,
    FormsModule
  ]
})
export class ELearningAdminModule { }
