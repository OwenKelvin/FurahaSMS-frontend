import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkLoadingComponent } from './components/network-loading/network-loading.component';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [NetworkLoadingComponent],
  exports: [NetworkLoadingComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class NetworkLoadingModule { }
