import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library.component';
import { LibrarySearchCatalogueComponent } from './components/library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from './components/library-my-account/library-my-account.component';
import { LibraryAdminComponent } from './library-admin/library-admin.component';
import { LibraryAdminUsersComponent } from './library-admin/library-admin-users/library-admin-users.component';
import { LibraryAdminBooksComponent } from './library-admin/library-admin-books/library-admin-books.component';
import { LibraryAdminAuthorsComponent } from './library-admin/library-admin-authors/library-admin-authors.component';
import { LibraryAdminPublishersComponent } from './library-admin/library-admin-publishers/library-admin-publishers.component';
import { AddBookComponent } from './library-admin/library-admin-books/add-book/add-book.component';
import { EditBookComponent } from './library-admin/library-admin-books/edit-book/edit-book.component';
import { ViewBookComponent } from './library-admin/library-admin-books/view-book/view-book.component';
import { CreateAuthorComponent } from './library-admin/library-admin-authors/create-author/create-author.component';
import { ViewAuthorComponent } from './library-admin/library-admin-authors/view-author/view-author.component';
import { EditAuthorComponent } from './library-admin/library-admin-authors/edit-author/edit-author.component';
import { CreatePublisherComponent } from './library-admin/library-admin-publishers/create-publisher/create-publisher.component';
import { ViewPublisherComponent } from './library-admin/library-admin-publishers/view-publisher/view-publisher.component';
import { EditPublisherComponent } from './library-admin/library-admin-publishers/edit-publisher/edit-publisher.component';
import { LibraryAdminTagsComponent } from './library-admin/library-admin-tags/library-admin-tags.component';
import { CreateTagComponent } from './library-admin/library-admin-tags/create-tag/create-tag.component';
import { ViewTagComponent } from './library-admin/library-admin-tags/view-tag/view-tag.component';
import { EditTagComponent } from './library-admin/library-admin-tags/edit-tag/edit-tag.component';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
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
        path: ':id/view',
        data: {
          breadcrumb: 'View'
        },
        component: ViewLibraryBookComponent
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./library-admin/library-admin.module').then(m => m.LibraryAdminModule),
    data: {
      breadcrumb: 'Admin'
    },
    // children: [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     component: LibraryAdminComponent,
    //     data: {
    //       breadcrumb: null
    //     }
    //   },
    //   {
    //     path: 'users',
    //     component: LibraryAdminUsersComponent,
    //     data: {
    //       breadcrumb: 'Users'
    //     }
    //   },
    //   {
    //     path: 'books',
    //     data: {
    //       breadcrumb: 'Books'
    //     },
    //     children: [
    //       {
    //         path: '',
    //         pathMatch: 'full',
    //         component: LibraryAdminBooksComponent,
    //         data: {
    //           breadcrumb: null
    //         },
    //       },
    //       {
    //         path: 'create',
    //         component: AddBookComponent,
    //         canDeactivate: [CanDeactivateGuard],
    //         data: {
    //           breadcrumb: null
    //         },
    //       },
    //       {
    //         path: ':id/edit',
    //         component: EditBookComponent,
    //         data: {
    //           breadcrumb: null
    //         },
    //       },
    //       {
    //         path: ':id/view',
    //         component: ViewBookComponent,
    //         data: {
    //           breadcrumb: null
    //         },
    //       }
    //     ]
    //   },
    //   {
    //     path: 'authors',
    //     data: {
    //       breadcrumb: 'Authors'
    //     },
    //     children: [
    //       {
    //         path: '',
    //         pathMatch: 'full',
    //         component: LibraryAdminAuthorsComponent,
    //         data: {
    //           breadcrumb: null
    //         },
    //       },
    //       {
    //         path: 'create',
    //         component: CreateAuthorComponent,
    //         data: {
    //           breadcrumb: 'Create Author'
    //         },
    //       },
    //       {
    //         path: ':id/view',
    //         component: ViewAuthorComponent,
    //         data: {
    //           breadcrumb: 'View Author'
    //         },
    //       },
    //       {
    //         path: ':id/edit',
    //         component: EditAuthorComponent,
    //         data: {
    //           breadcrumb: 'Edit Author'
    //         },
    //       }
    //     ]
    //   },
    //   {
    //     path: 'publishers',
    //     data: {
    //       breadcrumb: 'Publishers'
    //     }, children: [
    //       {
    //         path: '',
    //         pathMatch: 'full',
    //         component: LibraryAdminPublishersComponent,
    //         data: {
    //           breadcrumb: null
    //         },
    //       },
    //       {
    //         path: 'create',
    //         component: CreatePublisherComponent,
    //         data: {
    //           breadcrumb: 'Create Author'
    //         },
    //       },
    //       {
    //         path: ':id/view',
    //         component: ViewPublisherComponent,
    //         data: {
    //           breadcrumb: 'View Author'
    //         },
    //       },
    //       {
    //         path: ':id/edit',
    //         component: EditPublisherComponent,
    //         data: {
    //           breadcrumb: 'Edit Author'
    //         },
    //       }
    //     ]
    //   },
    //   {
    //     path: 'tags',
    //     data: {
    //       breadcrumb: 'Tags'
    //     }, children: [
    //       {
    //         path: '',
    //         pathMatch: 'full',
    //         component: LibraryAdminTagsComponent,
    //         data: {
    //           breadcrumb: null
    //         },
    //       },
    //       {
    //         path: 'create',
    //         component: CreateTagComponent,
    //         canDeactivate: [CanDeactivateGuard],
    //         data: {
    //           breadcrumb: 'Create Tags'
    //         },
    //       },
    //       {
    //         path: ':id/view',
    //         component: ViewTagComponent,
    //         data: {
    //           breadcrumb: 'View Tag'
    //         },
    //       },
    //       {
    //         path: ':id/edit',
    //         component: EditTagComponent,
    //         data: {
    //           breadcrumb: 'Edit Tag'
    //         },
    //       }
    //     ]
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
