import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule } from '@angular/router';
import { NameItemComponent } from './name-item/name-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';



@NgModule({
  declarations: [
    UserProfileComponent, NameItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class AppUserProfileModule { }
