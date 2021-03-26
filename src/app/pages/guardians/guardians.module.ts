import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardiansRoutingModule } from './guardians-routing.module';
import { ViewGuardianComponent } from './view-guardian/view-guardian.component';
import { ViewGuardianInfoComponent } from './view-guardian-info/view-guardian-info.component';
import { StoreModule } from '@ngrx/store';
import * as fromGuardianProfile from './store/reducers/guardian-profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GuardianProfileEffects } from './store/effects/guardian-profile.effects';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ViewGuardianStudentsComponent } from './view-guardian-students/view-guardian-students.component';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [ViewGuardianComponent, ViewGuardianInfoComponent, ViewGuardianStudentsComponent],
  imports: [
    CommonModule,
    GuardiansRoutingModule,
    StoreModule.forFeature(fromGuardianProfile.guardianProfileFeatureKey, fromGuardianProfile.reducer),
    EffectsModule.forFeature([GuardianProfileEffects]),
    AppUserProfileModule,
    AppLoadingBubbleModule,
    ReactiveComponentModule
  ]
})
export class GuardiansModule { }
