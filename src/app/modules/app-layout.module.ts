import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWithCenterComponent } from 'src/app/components/full-with-center/full-with-center.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ErrorModule } from '../components/error/error.module';
import { RouterModule } from '@angular/router';
import { NavbarTopComponent } from '../components/navbar-top/navbar-top.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkipLinkComponent } from '../components/skip-link/skip-link.component';
import { LoadMyProfileModule } from '../pages/my-profile/load-my-profile.module';
import { HeaderModule } from '../components/header/header.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    FullWithCenterComponent,
    LayoutComponent,
    FooterComponent,
    SidebarComponent,
    NavbarTopComponent,
    SkipLinkComponent
  ],
  exports: [
    FullWithCenterComponent,
    LayoutComponent,
    FooterComponent,
    NavbarTopComponent,
    SkipLinkComponent

  ],

  imports: [
    CommonModule,
    ErrorModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoadMyProfileModule,
    HeaderModule,
    ReactiveComponentModule
  ]
})
export class AppLayoutModule { }
