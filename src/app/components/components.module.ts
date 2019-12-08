import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FullWithCenterComponent } from './full-with-center/full-with-center.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginContactAdminComponent } from './login-contact-admin/login-contact-admin.component';
import { LoginResetComponent } from './login-reset/login-reset.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [LoginComponent, HomeComponent, FullWithCenterComponent, LoginContactAdminComponent, LoginResetComponent, InputComponent],
  imports: [CommonModule, ComponentsRoutingModule, ReactiveFormsModule],
  exports: [LoginComponent, HomeComponent]
})
export class ComponentsModule {}
