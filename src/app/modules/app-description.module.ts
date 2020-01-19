import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from '../components/description/description.component';


@NgModule({
  declarations: [
    DescriptionComponent
  ],
  exports: [
    DescriptionComponent
  ],

  imports: [
    CommonModule,
  ]
})
export class AppDescriptionModule { }
