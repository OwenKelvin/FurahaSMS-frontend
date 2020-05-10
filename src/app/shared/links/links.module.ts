import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links.component';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LinksComponent, LinkComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LinksComponent]
})
export class AppLinksModule { }
