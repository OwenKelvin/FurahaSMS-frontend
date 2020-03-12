import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AdmissionsComponent } from './admissions.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { EffectsModule } from '@ngrx/effects';
import { StaffTypeEffects } from '../admissions/store/effects/staff-type.effects';
import * as fromAdmissions from './store/reducers/staff-type.reducer'
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AdmissionsComponent,
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    AppLayoutModule,
    AppDashboardLinksModule,
    //StoreModule.forFeature(fromAdmissions.staffTypeFeatureKey, fromAdmissions.reducer),
    //EffectsModule.forFeature([StaffTypeEffects]),
  ]
})
export class AdmissionsModule { }
