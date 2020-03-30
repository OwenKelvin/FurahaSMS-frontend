import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningRoutingModule } from './e-learning-routing.module';
import { ELearningComponent } from './e-learning.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';


@NgModule({
  declarations: [ELearningComponent],
  imports: [
    CommonModule,
    ELearningRoutingModule,
    AppLinksModule
  ]
})
export class ELearningModule { }
