import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library.component';
import { LibrarySearchCatalogueComponent } from './components/library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from './components/library-my-account/library-my-account.component';
import { LibraryAdminComponent } from './components/library-admin/library-admin.component';
import { LibraryAdminUsersComponent } from './components/library-admin/library-admin-users/library-admin-users.component';
import { LibraryAdminBooksComponent } from './components/library-admin/library-admin-books/library-admin-books.component';
import { LibraryAdminAuthorsComponent } from './components/library-admin/library-admin-authors/library-admin-authors.component';
import { LibraryAdminPublishersComponent } from './components/library-admin/library-admin-publishers/library-admin-publishers.component';
import { AddBookComponent } from './components/library-admin/library-admin-books/add-book/add-book.component';
import { EditBookComponent } from './components/library-admin/library-admin-books/edit-book/edit-book.component';
import { ViewBookComponent } from './components/library-admin/library-admin-books/view-book/view-book.component';
import { CreateAuthorComponent } from './components/library-admin/library-admin-authors/create-author/create-author.component';
import { ViewAuthorComponent } from './components/library-admin/library-admin-authors/view-author/view-author.component';
import { EditAuthorComponent } from './components/library-admin/library-admin-authors/edit-author/edit-author.component';
import { CreatePublisherComponent } from './components/library-admin/library-admin-publishers/create-publisher/create-publisher.component';
import { ViewPublisherComponent } from './components/library-admin/library-admin-publishers/view-publisher/view-publisher.component';
import { EditPublisherComponent } from './components/library-admin/library-admin-publishers/edit-publisher/edit-publisher.component';


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
    path: 'admin',
    data: {
      breadcrumb: 'Admin'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LibraryAdminComponent,
        data: {
          breadcrumb: null
        }
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
        data: {
          breadcrumb: 'Books'
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: LibraryAdminBooksComponent,
            data: {
              breadcrumb: null
            },
          },
          {
            path: 'create',
            component: AddBookComponent,
            data: {
              breadcrumb: null
            },
          },
          {
            path: ':id/edit',
            component: EditBookComponent,
            data: {
              breadcrumb: null
            },
          },
          {
            path: ':id/view',
            component: ViewBookComponent,
            data: {
              breadcrumb: null
            },
          }
        ]
      },
      {
        path: 'authors',
        data: {
          breadcrumb: 'Authors'
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: LibraryAdminAuthorsComponent,
            data: {
              breadcrumb: null
            },
          },
          {
            path: 'create',
            component: CreateAuthorComponent,
            data: {
              breadcrumb: 'Create Author'
            },
          },
          {
            path: ':id/view',
            component: ViewAuthorComponent,
            data: {
              breadcrumb: 'View Author'
            },
          },
          {
            path: ':id/edit',
            component: EditAuthorComponent,
            data: {
              breadcrumb: 'Edit Author'
            },
          }
        ]
      },
      {
        path: 'publishers',
        data: {
          breadcrumb: 'Publishers'
        }, children: [
          {
            path: '',
            pathMatch: 'full',
            component: LibraryAdminPublishersComponent,
            data: {
              breadcrumb: null
            },
          },
          {
            path: 'create',
            component: CreatePublisherComponent,
            data: {
              breadcrumb: 'Create Author'
            },
          },
          {
            path: ':id/view',
            component: ViewPublisherComponent,
            data: {
              breadcrumb: 'View Author'
            },
          },
          {
            path: ':id/edit',
            component: EditPublisherComponent,
            data: {
              breadcrumb: 'Edit Author'
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
