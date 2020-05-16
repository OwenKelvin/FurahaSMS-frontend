import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkLoadingComponent } from './components/network-loading/network-loading.component';



@NgModule({
  declarations: [NetworkLoadingComponent],
  exports: [NetworkLoadingComponent],
  imports: [
    CommonModule
  ]
})
export class NetworkLoadingModule { }
