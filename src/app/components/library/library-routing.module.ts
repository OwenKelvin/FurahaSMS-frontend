import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { LibraryComponent } from './library.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LibrarySearchCatalogueComponent } from '../library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from '../library-my-account/library-my-account.component';
import { LibraryAdminComponent } from '../library-admin/library-admin.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'library',
        data: {
          breadcrumb: 'Library'
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: LibraryComponent,
            data: {
              breadcrumb: null
            },
          },
          {
            path: 'search-catalogue',
            component: LibrarySearchCatalogueComponent,
            data: {
              breadcrumb: 'Search'
            },
          },
          {
            path: 'my-account',
            component: LibraryMyAccountComponent,
            data: {
              breadcrumb: 'My Account'
            },
          },
          {
            path: 'admin',
            component: LibraryAdminComponent,
            data: {
              breadcrumb: 'Admin'
            },
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
