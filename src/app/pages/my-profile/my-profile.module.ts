import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { MyProfileInfoComponent } from './my-profile-info/my-profile-info.component';
import { StoreModule } from '@ngrx/store';
import * as fromMyProfile from './store/reducers/my-profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MyProfileEffects } from './store/effects/my-profile.effects';


@NgModule({
  declarations: [MyProfileComponent, MyProfileInfoComponent],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    AppUserProfileModule,
    AppLoadingBubbleModule,
    StoreModule.forFeature(fromMyProfile.myProfileFeatureKey, fromMyProfile.reducer),
    EffectsModule.forFeature([MyProfileEffects])
  ]
})
export class MyProfileModule { }
