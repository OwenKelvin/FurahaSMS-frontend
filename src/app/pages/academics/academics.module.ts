import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { AcademicsComponent } from './academics.component';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './store/effects/courses.effects';
import { AcademicsEffects } from './store/effects/academics.effects';
import * as fromAcademics from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    AcademicsComponent,
  ],
  imports: [
    CommonModule,
    AcademicsRoutingModule,
    AppLinksModule,
    StoreModule.forFeature(fromAcademics.academicsFeatureKey, fromAcademics.reducers),
    EffectsModule.forFeature([CoursesEffects, AcademicsEffects]),
    ReactiveComponentModule,

  ]
})
export class AcademicsModule { }
