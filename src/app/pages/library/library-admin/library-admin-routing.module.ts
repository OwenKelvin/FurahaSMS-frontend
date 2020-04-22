import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryAdminComponent } from './library-admin.component';
import { LibraryAdminUsersComponent } from './library-admin-users/library-admin-users.component';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { LibraryAdminAuthorsComponent } from './library-admin-authors/library-admin-authors.component';
import { CreateAuthorComponent } from './library-admin-authors/create-author/create-author.component';
import { ViewAuthorComponent } from './library-admin-authors/view-author/view-author.component';
import { EditAuthorComponent } from './library-admin-authors/edit-author/edit-author.component';
import { LibraryAdminTagsComponent } from './library-admin-tags/library-admin-tags.component';
import { CreateTagComponent } from './library-admin-tags/create-tag/create-tag.component';
import { ViewTagComponent } from './library-admin-tags/view-tag/view-tag.component';
import { EditTagComponent } from './library-admin-tags/edit-tag/edit-tag.component';


const routes: Routes = [
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
    loadChildren: () => import('./library-admin-books/library-admin-books.module')
      .then(m => m.LibraryAdminBooksModule)
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
    },
    loadChildren: () => import('./library-admin-publishers/library-admin-publisher.module')
      .then(m => m.LibraryAdminPublisherModule)
  },
  {
    path: 'tags',
    data: {
      breadcrumb: 'Tags'
    }, children: [
      {
        path: '',
        pathMatch: 'full',
        component: LibraryAdminTagsComponent,
        data: {
          breadcrumb: null
        },
      },
      {
        path: 'create',
        component: CreateTagComponent,
        canDeactivate: [CanDeactivateGuard],
        data: {
          breadcrumb: 'Create Tags'
        },
      },
      {
        path: ':id/view',
        component: ViewTagComponent,
        data: {
          breadcrumb: 'View Tag'
        },
      },
      {
        path: ':id/edit',
        component: EditTagComponent,
        data: {
          breadcrumb: 'Edit Tag'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryAdminRoutingModule { }
