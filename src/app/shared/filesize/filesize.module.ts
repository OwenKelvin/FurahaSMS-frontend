import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesizePipe } from './filesize.pipe';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [FilesizePipe],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ],
  exports: [FilesizePipe]
})
export class AppFilesizeModule { }
