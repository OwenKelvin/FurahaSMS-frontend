import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { AppLayoutModule } from '../modules/app-layout.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    ToastComponent,
  ],
  imports: [
    CommonModule,
    AppLayoutModule,
    ReactiveComponentModule,

  ],
  exports: [
    ToastComponent],

})
export class ComponentsModule {}
