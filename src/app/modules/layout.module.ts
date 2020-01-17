import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWithCenterComponent } from 'src/app/components/full-with-center/full-with-center.component';


@NgModule({
  declarations: [
    FullWithCenterComponent
  ],
  exports: [
    FullWithCenterComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AppLayoutModule { }
