import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AccountsComponent } from './accounts.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './store/effects/account.effects';
import { PaymentTypeEffects } from './store/effects/payment-type.effects';
import { StoreModule } from '@ngrx/store';
import * as fromAccounts from './store/reducers';
import { StudentFeeStatementEffects } from './store/effects/student-fee-statement.effects';


@NgModule({
  declarations: [ AccountsComponent ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    AppLayoutModule,
    AppDashboardLinksModule,
    StoreModule.forFeature(fromAccounts.accountFeatureKey, fromAccounts.reducers),
    EffectsModule.forFeature([AccountEffects, PaymentTypeEffects, StudentFeeStatementEffects])

  ]
})
export class AccountsModule { }
