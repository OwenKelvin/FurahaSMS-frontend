import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { FullWithCenterComponent } from './full-with-center/full-with-center.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { LoginContactAdminComponent } from './login-contact-admin/login-contact-admin.component';
// import { LoginResetComponent } from './login-reset/login-reset.component';
// import { InputComponent } from './input/input.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginModule } from './login/login.module';
import { ToastComponent } from './toast/toast.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { UserButtonComponent } from './user-button/user-button.component';
import { MenuSearchComponent } from './menu-search/menu-search.component';
import { PageUnderMaintenanceComponent } from './page-under-maintenance/page-under-maintenance.component';
import { ErrorModule } from './error/error.module';
import { AdmissionsComponent } from './admissions/admissions.component';
import { AdmissionsModule } from './admissions/admissions.module';
import { DashboardLinkComponent } from './dashboard-link/dashboard-link.component';
import { DashboardLinksComponent } from './dashboard-links/dashboard-links.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { TeachingStaffAdmissionComponent } from './teaching-staff-admission/teaching-staff-admission.component';
import { SupportStaffAdmissionComponent } from './support-staff-admission/support-staff-admission.component';
import { LibraryComponent } from './library/library.component';
import { LibraryModule } from './library/library.module';
import { SchoolManagementComponent } from './management/management.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { AcademicsComponent } from './academics/academics.component';
import { ReportsComponent } from './reports/reports.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountsModule } from './accounts/accounts.module';
import { ProcurementsComponent } from './procurements/procurements.component';
import { ProcurementsModule } from './procurements/procurements.module';
import { SportsComponent } from './sports/sports.component';
import { SportsModule } from './sports/sports.module';
import { SchoolManagementModule } from './management/management.module';
import { TimeTableModule } from './time-table/time-table.module';
import { AcademicsModule } from './academics/academics.module';
import { ReportsModule } from './reports/reports.module';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LabelStarRequiredComponent } from './label-star-required/label-star-required.component';
import { StudentsModule } from './students/students.module';
import { ViewStudentComponent } from './admissions/view-student/view-student.component';
import { ViewStudentInfoComponent } from './admissions/view-student-info/view-student-info.component';
import { StudentAdmissionsEditComponent } from './student-admissions-edit/student-admissions-edit.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentsRecentlyCreatedComponent } from './students-recently-created/students-recently-created.component';
import { LoadingBubbleComponent } from './loading-bubble/loading-bubble.component';
import { AcademicYearComponent } from './academics/academic-year/academic-year.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { ViewAcademicYearComponent } from './view-academic-year/view-academic-year.component';
import { AcademicYearArchivesComponent } from './academics/academic-year-archives/academic-year-archives.component';
import { ViewAcademicYearInfoComponent } from './view-academic-year-info/view-academic-year-info.component';
import { AcademicYearFinancialPlanComponent } from './academics/academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearSubjectUnitsComponent } from './academics/academic-year-subject-units/academic-year-subject-units.component';
import { LibrarySearchCatalogueComponent } from './library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from './library-my-account/library-my-account.component';
import { LibraryAdminComponent } from './library-admin/library-admin.component';
import { AcademicsCurriculumComponent } from './academics/academics-curriculum/academics-curriculum.component';
import {
  AcademicsCurriculumUnitCategoriesComponent
} from './academics/academics-curriculum-unit-categories/academics-curriculum-unit-categories.component';
import {
  AcademicsCurriculumUnitsComponent
} from './academics/academics-curriculum-units/academics-curriculum-units.component';
import {
  AcademicsCurriculumClassLevelCategoriesComponent
} from './academics/academics-curriculum-class-level-categories/academics-curriculum-class-level-categories.component';
import {
  AcademicsCurriculumClassLevelsComponent
} from './academics/academics-curriculum-class-levels/academics-curriculum-class-levels.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { ChipsComponent } from './chips/chips.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CreateUnitCategoriesComponent } from './create-unit-categories/create-unit-categories.component';
import { EditUnitCategoryComponent } from './edit-unit-category/edit-unit-category.component';
import { ViewUnitCategoryComponent } from './view-unit-category/view-unit-category.component';
import { ViewUnitComponent } from './view-unit/view-unit.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { CreateUnitComponent } from './create-unit/create-unit.component';
import { CreateClassLevelCategoryComponent } from './create-class-level-category/create-class-level-category.component';
import { ViewClassLevelCategoryComponent } from './view-class-level-category/view-class-level-category.component';
import { EditClassLevelCategoryComponent } from './edit-class-level-category/edit-class-level-category.component';
import { EditClassLevelComponent } from './edit-class-level/edit-class-level.component';
import { ViewClassLevelComponent } from './view-class-level/view-class-level.component';
import { CreateClassLevelComponent } from './create-class-level/create-class-level.component';
// import { SelectComponent } from './select/select.component';
import { CrudComponent } from './crud/crud.component';
import { ViewComponent } from './view/view.component';
import { DescriptionComponent } from './description/description.component';
import { ViewStudentGuardiansComponent } from './admissions/view-student-guardians/view-student-guardians.component';
import { ViewStudentAcademicsComponent } from './admissions/view-student-academics/view-student-academics.component';
import { CreateStudentGuardianComponent } from './create-student-guardian/create-student-guardian.component';
import { OrdinalPipe } from '../pipes/ordinal.pipe';
import { TelInputComponent } from './tel-input/tel-input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProcurementsRequestComponent } from './procurements/procurements-request/procurements-request.component';
import { NetworkErrorComponent } from './network-error/network-error.component';
import { MyProcurementsRequestComponent } from './my-procurements-request/my-procurements-request.component';
import { ViewProcurementRequestComponent } from './procurements/view-procurement-request/view-procurement-request.component';
import { EditProcurementRequestComponent } from './edit-procurement-request/edit-procurement-request.component';
import { ApproveProcurementRequestComponent } from './approve-procurement-request/approve-procurement-request.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProcurementsVendorsComponent } from './procurements/procurements-vendors/procurements-vendors.component';
import { CreateProcurementsVendorsComponent } from './procurements/create-procurements-vendors/create-procurements-vendors.component';
import { ViewProcurementsVendorComponent } from './procurements/view-procurements-vendor/view-procurements-vendor.component';
import {
  ViewProcurementsApprovedRequestsComponent
} from './procurements/view-procurements-approved-requests/view-procurements-approved-requests.component';
import { CreateProcurementTenderComponent } from './procurements/create-procurement-tender/create-procurement-tender.component';
import { ProcurementItemComponent } from './procurements/procurement-item/procurement-item.component';
import { ProcurementTendersBidsComponent } from './procurements/procurement-tenders-bids/procurement-tenders-bids.component';
import { ViewProcurementTendersBidsComponent } from './procurements/view-procurement-tenders-bids/view-procurement-tenders-bids.component';
import { CreateProcurementTenderBidComponent } from './procurements/create-procurement-tender-bid/create-procurement-tender-bid.component';
import { ViewProcurementTenderBidsComponent } from './procurements/view-procurement-tender-bids/view-procurement-tender-bids.component';
import { ValidateSubmitButtonsComponent } from './validate-submit-buttons/validate-submit-buttons.component';
import { ViewProcurementTendersAwardedComponent } from './procurements/view-procurement-tenders-awarded/view-procurement-tenders-awarded.component';
import { FulfillOrRejectTenderFormComponent } from './fulfill-or-reject-tender-form/fulfill-or-reject-tender-form.component';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppLayoutModule } from '../modules/app-layout.module';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ToastComponent,
    LogoutButtonComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarTopComponent,
    UserButtonComponent,
    MenuSearchComponent,
    PageUnderMaintenanceComponent,
    AdmissionsComponent,
    DashboardLinkComponent,
    DashboardLinksComponent,
    PageNotFoundComponent,
    StudentAdmissionComponent,
    TeachingStaffAdmissionComponent,
    SupportStaffAdmissionComponent,
    LibraryComponent,
    AccountsComponent,
    SchoolManagementComponent,
    TimeTableComponent,
    AcademicsComponent,
    ReportsComponent,
    ProcurementsComponent,
    SportsComponent,
    
    // LabelStarRequiredComponent,
    // LoadingBubbleComponent,
    
    LibrarySearchCatalogueComponent,
    LibraryMyAccountComponent,
    LibraryAdminComponent,
    
    // ChipsComponent,
    BreadcrumbComponent,
    
    // SelectComponent,
    CrudComponent,
    ViewComponent,
    DescriptionComponent,
    ViewStudentGuardiansComponent,
    ViewStudentAcademicsComponent,
    CreateStudentGuardianComponent,
    OrdinalPipe,
    // TelInputComponent,
    
    NetworkErrorComponent,
    
    //ValidateSubmitButtonsComponent,
    
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    // LoginModule,
    AdmissionsModule,
    LibraryModule,
    AccountsModule,
    ProcurementsModule,
    SportsModule,
    SchoolManagementModule,
    TimeTableModule,
    AcademicsModule,
    ReportsModule,
    StudentsModule,
    ErrorModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    AppInputModule,
    AppLayoutModule,

  ],
  exports: [
    // LoginComponent,
    HomeComponent,
    ToastComponent],

})
export class ComponentsModule {}
