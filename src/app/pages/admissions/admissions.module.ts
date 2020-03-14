import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AdmissionsComponent } from './admissions.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { EffectsModule } from '@ngrx/effects';
import { AdmissionsEffects } from './store/effects/admissions.effects';
import { StoreModule } from '@ngrx/store';
import * as fromAdmissions from './store/reducers';

@NgModule({
  declarations: [
    AdmissionsComponent,
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    AppLayoutModule,
    AppDashboardLinksModule,
    StoreModule.forFeature(fromAdmissions.admissionsFeatureKey, fromAdmissions.reducers),
    EffectsModule.forFeature([AdmissionsEffects]),
  ]
})
export class AdmissionsModule { }
