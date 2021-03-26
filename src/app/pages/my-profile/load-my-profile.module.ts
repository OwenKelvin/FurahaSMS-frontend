import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MyProfileEffects } from './store/effects/my-profile.effects';
import * as fromMyProfile from './store/reducers/my-profile.reducer';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMyProfile.myProfileFeatureKey, fromMyProfile.reducer),
    EffectsModule.forFeature([MyProfileEffects]),
    ReactiveComponentModule,
  ]
})
export class LoadMyProfileModule { }
