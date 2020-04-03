import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library.component';
import { LibrarySearchCatalogueComponent } from './components/library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from './components/library-my-account/library-my-account.component';
import { ViewLibraryBookComponent } from './components/view-library-book/view-library-book.component';


const routes: Routes = [
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
    path: 'books',
    data: {
      breadcrumb: 'Books'
    },
    children: [
      {
        path: ':id',
        data: {
          breadcrumb: null
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'view'
          },
          {
        path: 'view',
        data: {
          breadcrumb: 'View'
        },
        component: ViewLibraryBookComponent
      }
        ]
      },

    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./library-admin/library-admin.module').then(m => m.LibraryAdminModule),
    data: {
      breadcrumb: 'Admin'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
