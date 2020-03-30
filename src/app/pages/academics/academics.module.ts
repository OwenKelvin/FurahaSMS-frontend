import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { AcademicsComponent } from './academics.component';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './store/effects/courses.effects';
import { AcademicsEffects } from './store/effects/academics.effects';
import * as fromAcademics from './store/reducers';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AcademicsComponent,
  ],
  imports: [
    CommonModule,
    AcademicsRoutingModule,
    AppDashboardLinksModule,
    StoreModule.forFeature(fromAcademics.academicsFeatureKey, fromAcademics.reducers),
    EffectsModule.forFeature([CoursesEffects, AcademicsEffects]),

  ]
})
export class AcademicsModule { }
