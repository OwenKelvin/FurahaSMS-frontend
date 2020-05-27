import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExtentionPipe } from './file-extention.pipe';



@NgModule({
  declarations: [FileExtentionPipe],
  exports: [FileExtentionPipe],
  imports: [
    CommonModule
  ]
})
export class FileExtentionModule { }
