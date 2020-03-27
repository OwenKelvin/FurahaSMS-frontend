import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule } from '@angular/router';
import { NameItemComponent } from './name-item/name-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    UserProfileComponent, NameItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    ModalModule.forRoot()
  ],
  exports: [
    UserProfileComponent
  ]
})
export class AppUserProfileModule { }
