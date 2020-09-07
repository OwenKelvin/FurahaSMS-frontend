import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from 'src/app/pages/home/home.component';
import {AppLayoutModule} from 'src/app/modules/app-layout.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppLayoutModule
  ]
})
export class HomeModule {
}
