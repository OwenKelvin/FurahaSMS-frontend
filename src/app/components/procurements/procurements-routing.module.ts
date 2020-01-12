import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ProcurementsComponent } from './procurements.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProcurementsRequestComponent } from '../procurements-request/procurements-request.component';
import { MyProcurementsRequestComponent } from '../my-procurements-request/my-procurements-request.component';
import { ViewProcurementRequestComponent } from '../view-procurement-request/view-procurement-request.component';
import { EditProcurementRequestComponent } from '../edit-procurement-request/edit-procurement-request.component';
import { ApproveProcurementRequestComponent } from '../approve-procurement-request/approve-procurement-request.component';
import { ProcurementsVendorsComponent } from '../procurements-vendors/procurements-vendors.component';
import { CreateProcurementsVendorsComponent } from '../create-procurements-vendors/create-procurements-vendors.component';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { ViewProcurementsVendorComponent } from '../view-procurements-vendor/view-procurements-vendor.component';


const routes: Routes = [
  {
    path: 'procurements',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    data: {
      breadcrumb: ['Procurements']
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProcurementsComponent,
        data: {
          breadcrumb: null
        },
      },
      {
        path: 'request',
        pathMatch: 'full',
        component: ProcurementsRequestComponent,
        data: {
          breadcrumb: 'Make Request'
        },
      },
      {
        path: 'my-requests',
        pathMatch: 'full',
        component: MyProcurementsRequestComponent,
        data: {
          breadcrumb: 'My Requests'
        },
      },
      {
        path: 'requests',
        children: [
          {
            path: ':id/view',
            component: ViewProcurementRequestComponent,
            data: {
              breadcrumb: null
            },
          },
          {
            path: ':id/edit',
            component: EditProcurementRequestComponent,
            data: {
              breadcrumb: null
            },
          },
          {
            path: 'approve',
            component: ApproveProcurementRequestComponent,
            data: {
              breadcrumb: null
            },
          }
        ],
        data: {
          breadcrumb: 'View Request'
        },
      },
      {
        path: 'vendors',
        data: {
          breadcrumb: 'Vendors'
        },
        children: [
          {
            path: '',
            component: ProcurementsVendorsComponent,
            data: {
              breadcrumb: null
            },
          },
          {
            path: 'create',
            component: CreateProcurementsVendorsComponent,
            canDeactivate: [CanDeactivateGuard],
            data: {
              breadcrumb: 'New Procurement Vendor'
            },
          },
          {
            path: ':id/view',
            component: ViewProcurementsVendorComponent,
            data: {
              breadcrumb: 'View Vendor'
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
export class ProcurementsRoutingModule { }
