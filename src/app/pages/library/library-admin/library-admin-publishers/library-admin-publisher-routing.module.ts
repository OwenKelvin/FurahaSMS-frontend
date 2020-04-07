import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryAdminPublishersComponent } from './library-admin-publishers.component';
import { CreatePublisherComponent } from './create-publisher/create-publisher.component';
import { ViewPublisherComponent } from './view-publisher/view-publisher.component';
import { EditPublisherComponent } from './edit-publisher/edit-publisher.component';
import { LibraryAdminPublisherItemComponent } from './library-admin-publisher-item/library-admin-publisher-item.component';


const routes: Routes = [

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
    path: ':id',
    component: LibraryAdminPublisherItemComponent,
    data: {
      breadcrumb: null
    },
    children: [
      {
        path: 'view',
        component: ViewPublisherComponent,
        data: {
          breadcrumb: 'View Publisher'
        },
      },
      {
        path: 'edit',
        component: EditPublisherComponent,
        data: {
          breadcrumb: 'Edit Author'
        },
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryAdminPublisherRoutingModule { }
