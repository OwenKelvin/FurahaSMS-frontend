import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLibraryClassComponent } from '../components/select-library-class/select-library-class.component';
import { SelectLibrarySubClassComponent } from '../components/select-library-sub-class/select-library-sub-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';



@NgModule({
  declarations: [
    
    SelectLibraryClassComponent,
    SelectLibrarySubClassComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppLoadingBubbleModule
  ],
  exports: [
    SelectLibraryClassComponent,
    SelectLibrarySubClassComponent
  ]
})
export class AppSelectLibraryClassModule { }
