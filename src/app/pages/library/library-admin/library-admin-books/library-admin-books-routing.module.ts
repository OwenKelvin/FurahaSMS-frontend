import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryAdminBooksComponent } from './library-admin-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewBookComponent } from './view-book/view-book.component';


const routes: Routes = [
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
    canDeactivate: [CanDeactivateGuard],
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryAdminBooksRoutingModule { }
