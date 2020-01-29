import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWithCenterComponent } from 'src/app/components/full-with-center/full-with-center.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ErrorModule } from '../components/error/error.module';
import { RouterModule } from '@angular/router';
import { UserButtonComponent } from '../components/user-button/user-button.component';
import { LogoutButtonComponent } from '../components/logout-button/logout-button.component';
import { NavbarTopComponent } from '../components/navbar-top/navbar-top.component';
import { MenuSearchComponent } from '../components/menu-search/menu-search.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkipLinkComponent } from '../components/skip-link/skip-link.component';


@NgModule({
  declarations: [
    FullWithCenterComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    UserButtonComponent,
    LogoutButtonComponent,
    NavbarTopComponent,
    MenuSearchComponent,
    BreadcrumbComponent,
    SkipLinkComponent
  ],
  exports: [
    FullWithCenterComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    UserButtonComponent,
    LogoutButtonComponent,
    NavbarTopComponent,
    MenuSearchComponent,
    BreadcrumbComponent,
    SkipLinkComponent

  ],

  imports: [
    CommonModule,
    ErrorModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppLayoutModule { }
