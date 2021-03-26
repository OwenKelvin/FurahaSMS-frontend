import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExtentionPipe } from './file-extention.pipe';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [FileExtentionPipe],
  exports: [FileExtentionPipe],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class FileExtensionModule { }
