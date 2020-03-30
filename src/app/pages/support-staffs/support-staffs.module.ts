import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportStaffsRoutingModule } from './support-staffs-routing.module';
import { ViewSupportStaffInfoComponent } from './support-staff/view-support-staff-info/view-support-staff-info.component';
import { ViewSupportStaffComponent } from './support-staff/view-support-staff/view-support-staff.component';
import { SupportStaffComponent } from './services/support-staff/support-staff.component';
import { EffectsModule } from '@ngrx/effects';
import { SupportStaffEffects } from './store/effects/support-staff.effects';
import { StoreModule } from '@ngrx/store';
import { supportStaffFeatureKey, reducer } from './store/reducers/support-staff.reducer';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';


@NgModule({
  declarations: [
    ViewSupportStaffInfoComponent,
    ViewSupportStaffComponent,
    SupportStaffComponent],
  imports: [
    CommonModule,
    SupportStaffsRoutingModule,
    StoreModule.forFeature(supportStaffFeatureKey, reducer ),
    EffectsModule.forFeature([SupportStaffEffects]),
    AppUserProfileModule,
    AppLoadingBubbleModule
  ]
})
export class SupportStaffsModule { }
