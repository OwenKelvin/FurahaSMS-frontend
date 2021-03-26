import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AccountsComponent } from './accounts.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './store/effects/account.effects';
import { PaymentTypeEffects } from './store/effects/payment-type.effects';
import { StoreModule } from '@ngrx/store';
import * as fromAccounts from './store/reducers';
import { StudentFeeStatementEffects } from './store/effects/student-fee-statement.effects';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [ AccountsComponent ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    AppLayoutModule,
    AppLinksModule,
    StoreModule.forFeature(fromAccounts.accountFeatureKey, fromAccounts.reducers),
    EffectsModule.forFeature([AccountEffects, PaymentTypeEffects, StudentFeeStatementEffects]),
    ReactiveComponentModule

  ]
})
export class AccountsModule { }
