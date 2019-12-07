import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FullWithCenterComponent } from './full-with-center/full-with-center.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, HomeComponent, FullWithCenterComponent],
  imports: [CommonModule, ComponentsRoutingModule, ReactiveFormsModule],
  exports: [LoginComponent, HomeComponent]
})
export class ComponentsModule {}
