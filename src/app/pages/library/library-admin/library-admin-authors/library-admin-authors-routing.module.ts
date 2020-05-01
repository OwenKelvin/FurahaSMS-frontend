import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryAdminAuthorsComponent } from './library-admin-authors.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { ViewAuthorComponent } from './view-author/view-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';


const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryAdminAuthorsRoutingModule { }
