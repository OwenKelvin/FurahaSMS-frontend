import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AdmissionsComponent } from './admissions.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { EffectsModule } from '@ngrx/effects';
import { AdmissionsEffects } from './store/effects/admissions.effects';
import { StoreModule } from '@ngrx/store';
import * as fromAdmissions from './store/reducers';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    AdmissionsComponent,
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    AppLayoutModule,
    AppLinksModule,
    StoreModule.forFeature(fromAdmissions.admissionsFeatureKey, fromAdmissions.reducers),
    EffectsModule.forFeature([AdmissionsEffects]),
    ReactiveComponentModule,
  ]
})
export class AdmissionsModule { }
