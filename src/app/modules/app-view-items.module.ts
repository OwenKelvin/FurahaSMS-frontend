import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewItemsComponent } from '../components/view-items/view-items.component';
import { RouterModule } from '@angular/router';
import { ErrorModule } from '../components/error/error.module';
import { AppChipsModule } from './app-chip.module';
import { AppLoadingBubbleModule } from './app-loading-bubble';


@NgModule({
  declarations: [
    ViewItemsComponent
  ],
  exports: [
    ViewItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ErrorModule,
    AppChipsModule,
    AppLoadingBubbleModule
  ]
})
export class AppViewItemsModule { }
