import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementsRoutingModule } from './procurements-routing.module';
import { MyProcurementsRequestComponent } from './my-procurements-request/my-procurements-request.component';
import { ViewProcurementRequestComponent } from './view-procurement-request/view-procurement-request.component';
import { EditProcurementRequestComponent } from './edit-procurement-request/edit-procurement-request.component';
import { ApproveProcurementRequestComponent } from './approve-procurement-request/approve-procurement-request.component';
import { ProcurementsVendorsComponent } from './procurements-vendors/procurements-vendors.component';
import { CreateProcurementsVendorsComponent } from './create-procurements-vendors/create-procurements-vendors.component';
import {
  ViewProcurementsVendorComponent
} from './view-procurements-vendor/view-procurements-vendor.component';
import {
  ViewProcurementsApprovedRequestsComponent
} from './view-procurements-approved-requests/view-procurements-approved-requests.component';
import { CreateProcurementTenderComponent } from './create-procurement-tender/create-procurement-tender.component';
import { ProcurementItemComponent } from './procurement-item/procurement-item.component';
import { ProcurementTendersBidsComponent } from './procurement-tenders-bids/procurement-tenders-bids.component';
import { ViewProcurementTendersBidsComponent } from './view-procurement-tenders-bids/view-procurement-tenders-bids.component';
import { CreateProcurementTenderBidComponent } from './create-procurement-tender-bid/create-procurement-tender-bid.component';
import { ViewProcurementTenderBidsComponent } from './view-procurement-tender-bids/view-procurement-tender-bids.component';
import { ViewProcurementTendersAwardedComponent } from './view-procurement-tenders-awarded/view-procurement-tenders-awarded.component';
import { FulfillOrRejectTenderFormComponent } from './fulfill-or-reject-tender-form/fulfill-or-reject-tender-form.component';
import { ProcurementsRequestComponent } from './procurements-request/procurements-request.component';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppTelInputModule } from 'src/app/modules/app-tel-input.module';
import { ErrorModule } from '../../components/error/error.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { ProcurementsComponent } from './procurements.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {FormErrorsModule} from '../../shared/form-errors/form-errors.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    MyProcurementsRequestComponent,
    ViewProcurementRequestComponent,
    EditProcurementRequestComponent,
    ApproveProcurementRequestComponent,
    ProcurementsVendorsComponent,
    CreateProcurementsVendorsComponent,
    ViewProcurementsVendorComponent,
    ViewProcurementsApprovedRequestsComponent,
    CreateProcurementTenderComponent,
    ProcurementItemComponent,
    ProcurementTendersBidsComponent,
    ViewProcurementTendersBidsComponent,
    CreateProcurementTenderBidComponent,
    ViewProcurementTenderBidsComponent,
    ViewProcurementTendersAwardedComponent,
    FulfillOrRejectTenderFormComponent,
    ProcurementsRequestComponent,
    ProcurementsComponent
  ],
  imports: [
    CommonModule,
    ProcurementsRoutingModule,
    AppViewItemsModule,
    AppLoadingBubbleModule,
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    TabsModule.forRoot(),
    AppTelInputModule,
    ErrorModule,
    AppLayoutModule,
    AppLinksModule,
    ModalModule.forRoot(),
    AppValidateSubmitButtonsModule,
    FormErrorsModule,
    ReactiveComponentModule
  ],
  entryComponents: [
    CreateProcurementTenderBidComponent,
    FulfillOrRejectTenderFormComponent]
})
export class ProcurementsModule { }
