import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { MyProfileInfoComponent } from './my-profile-info/my-profile-info.component';


@NgModule({
  declarations: [MyProfileComponent, MyProfileInfoComponent],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    AppUserProfileModule,
    AppLoadingBubbleModule
  ]
})
export class MyProfileModule { }
