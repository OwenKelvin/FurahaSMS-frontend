import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProcurementsComponent} from './procurements.component';
import {ProcurementsRequestComponent} from './procurements-request/procurements-request.component';
import {MyProcurementsRequestComponent} from './my-procurements-request/my-procurements-request.component';
import {ViewProcurementRequestComponent} from './view-procurement-request/view-procurement-request.component';
import {EditProcurementRequestComponent} from './edit-procurement-request/edit-procurement-request.component';
import {ApproveProcurementRequestComponent} from './approve-procurement-request/approve-procurement-request.component';
import {ProcurementsVendorsComponent} from './procurements-vendors/procurements-vendors.component';
import {CreateProcurementsVendorsComponent} from './create-procurements-vendors/create-procurements-vendors.component';
import {CanDeactivateGuard} from 'src/app/guards/can-deactivate.guard';
import {ViewProcurementsVendorComponent} from './view-procurements-vendor/view-procurements-vendor.component';
import {
  ViewProcurementsApprovedRequestsComponent
} from './view-procurements-approved-requests/view-procurements-approved-requests.component';
import {CreateProcurementTenderComponent} from './create-procurement-tender/create-procurement-tender.component';
import {ProcurementTendersBidsComponent} from './procurement-tenders-bids/procurement-tenders-bids.component';
import {ViewProcurementTendersBidsComponent} from './view-procurement-tenders-bids/view-procurement-tenders-bids.component';
import {ViewProcurementTendersAwardedComponent} from './view-procurement-tenders-awarded/view-procurement-tenders-awarded.component';


const routes: Routes = [
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
    data: {
      breadcrumb: 'My Requests'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MyProcurementsRequestComponent,
        data: {
          breadcrumb: null
        },
      },
      {
        path: 'create',
        component: ProcurementsRequestComponent,
        data: {
          breadcrumb: null
        },
      }
    ]
  },
  {
    path: 'tender',

    data: {
      breadcrumb: 'Tenders'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ViewProcurementsApprovedRequestsComponent,
        data: {
          breadcrumb: null
        }

      }
    ]
  },
  {
    path: 'tenders',
    data: {
      breadcrumb: 'Tenders'
    },
    children: [
      {
        path: 'bids',
        pathMatch: 'full',
        component: ProcurementTendersBidsComponent,
        data: {
          breadcrumb: 'Biddings'
        }
      },
      {
        path: ':id/bids',
        component: ViewProcurementTendersBidsComponent,
        data: {
          breadcrumb: 'Biddings'
        }
      },
      {
        path: 'awarded',
        component: ViewProcurementTendersAwardedComponent,
        data: {
          breadcrumb: 'Awarded Tenders'
        }
      }
    ]
  },
  {
    path: 'requests',
    data: {
      breadcrumb: 'View Request'
    },
    children: [
      {
        path: ':id/view',
        component: ViewProcurementRequestComponent,
        data: {
          breadcrumb: 'View'
        },
      },
      {
        path: ':id/edit',
        component: EditProcurementRequestComponent,
        data: {
          breadcrumb: 'Edit'
        },
      },
      {
        path: ':id/tender',
        component: CreateProcurementTenderComponent,
        data: {
          breadcrumb: 'Tender'
        },
      },
      {
        path: 'approve',
        component: ApproveProcurementRequestComponent,
        data: {
          breadcrumb: 'Approve'
        },
      },

    ],
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementsRoutingModule {
}
