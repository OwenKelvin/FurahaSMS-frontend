import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { LibraryComponent } from './library.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LibrarySearchCatalogueComponent } from './library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from './library-my-account/library-my-account.component';
import { LibraryAdminComponent } from './library-admin/library-admin.component';
import { LibraryAdminUsersComponent } from './library-admin-users/library-admin-users.component';
import { LibraryAdminBooksComponent } from './library-admin-books/library-admin-books.component';
import { LibraryAdminAuthorsComponent } from './library-admin-authors/library-admin-authors.component';
import { LibraryAdminPublishersComponent } from './library-admin-publishers/library-admin-publishers.component';


const routes: Routes = [
  {

    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
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
        data: {
          breadcrumb: 'Admin'
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: LibraryAdminComponent,
          },
          {
            path: 'users',
            component: LibraryAdminUsersComponent,
            data: {
              breadcrumb: 'Users'
            }
          },
          {
            path: 'books',
            component: LibraryAdminBooksComponent,
            data: {
              breadcrumb: 'Books'
            }
          },
          {
            path: 'authors',
            component: LibraryAdminAuthorsComponent,
            data: {
              breadcrumb: 'Authors'
            }
          },
          {
            path: 'publishers',
            component: LibraryAdminPublishersComponent,
            data: {
              breadcrumb: 'Publishers'
            }
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
