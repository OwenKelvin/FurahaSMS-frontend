import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMaterialsRoutingModule } from './study-materials-routing.module';
import { StudyMaterialsComponent } from './study-materials.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [StudyMaterialsComponent],
  imports: [
    CommonModule,
    StudyMaterialsRoutingModule,
    AppLinksModule,
    ReactiveComponentModule
  ]
})
export class StudyMaterialsModule { }
