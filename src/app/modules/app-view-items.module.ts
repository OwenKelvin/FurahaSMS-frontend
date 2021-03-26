import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewItemsComponent } from '../components/view-items/view-items.component';
import { RouterModule } from '@angular/router';
import { ErrorModule } from '../components/error/error.module';
import { AppChipsModule } from './app-chip.module';
import { AppLoadingBubbleModule } from './app-loading-bubble';
import { ViewComponent } from '../components/view/view.component';
import { AppDescriptionModule } from './app-description.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    ViewItemsComponent,
    ViewComponent
  ],
  exports: [
    ViewItemsComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ErrorModule,
    AppChipsModule,
    AppLoadingBubbleModule,
    AppDescriptionModule,
    ReactiveComponentModule

  ]
})
export class AppViewItemsModule { }
