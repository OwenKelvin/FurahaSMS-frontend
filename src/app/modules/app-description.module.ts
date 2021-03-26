import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from '../components/description/description.component';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    DescriptionComponent
  ],
  exports: [
    DescriptionComponent
  ],

  imports: [
    CommonModule,
    ReactiveComponentModule,
  ]
})
export class AppDescriptionModule { }
