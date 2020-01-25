import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from '../components/chips/chips.component';
import { TabErrorStateComponent } from '../components/tab-error-state/tab-error-state.component';


@NgModule({
  declarations: [
    TabErrorStateComponent
  ],
  exports: [
    TabErrorStateComponent
  ],

  imports: [
    CommonModule,
  ]
})
export class TabErrorStateModule { }
