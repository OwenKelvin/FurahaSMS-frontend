import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBubbleComponent } from '../components/loading-bubble/loading-bubble.component';


@NgModule({
  declarations: [
    LoadingBubbleComponent
  ],
  exports: [
    LoadingBubbleComponent
  ],
  
  imports: [
    CommonModule,
  ]
})
export class AppLoadingBubbleModule { }
