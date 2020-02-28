import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsAdminComponent } from './accounts-admin.component';
import { FinancialCostsMaintenanceComponent } from './financial-costs-maintenance/financial-costs-maintenance.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AccountsAdminComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'financial-costs',
    component: FinancialCostsMaintenanceComponent,
    data: {
      breadcrumb: 'Financial Costs'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsAdminRoutingModule { }
