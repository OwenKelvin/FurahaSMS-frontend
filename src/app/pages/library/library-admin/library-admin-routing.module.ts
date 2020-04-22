import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryAdminComponent } from './library-admin.component';
import { LibraryAdminUsersComponent } from './library-admin-users/library-admin-users.component';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
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
    loadChildren: () => import('./library-admin-authors/library-admin-authors.module')
      .then(m => m.LibraryAdminAuthorsModule)
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
    },
    loadChildren: () => import('./library-admin-tags/library-admin-tags.module')
      .then(m => m.LibraryAdminTagsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryAdminRoutingModule { }
