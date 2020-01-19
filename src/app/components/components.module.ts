import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { AppLayoutModule } from '../modules/app-layout.module';

@NgModule({
  declarations: [
    ToastComponent,
  ],
  imports: [
    CommonModule,
    AppLayoutModule,

  ],
  exports: [
    ToastComponent],

})
export class ComponentsModule {}
