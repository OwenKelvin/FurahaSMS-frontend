import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExtentionColorPipe } from './file-extention-color.pipe';
import { FileExtentionIconPipe } from './file-extention-icon.pipe';



@NgModule({
  declarations: [FileExtentionColorPipe, FileExtentionIconPipe],
  exports: [FileExtentionColorPipe, FileExtentionIconPipe],
  imports: [
    CommonModule
  ]
})
export class FileExtentionModule { }
