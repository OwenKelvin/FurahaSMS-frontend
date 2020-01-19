import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './sports.component';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';


@NgModule({
  declarations: [SportsComponent],
  imports: [
    CommonModule,
    SportsRoutingModule,
    AppLayoutModule
  ]
})
export class SportsModule { }
