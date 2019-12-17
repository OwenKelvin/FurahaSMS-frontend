import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FullWithCenterComponent } from './full-with-center/full-with-center.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginContactAdminComponent } from './login-contact-admin/login-contact-admin.component';
import { LoginResetComponent } from './login-reset/login-reset.component';
import { InputComponent } from './input/input.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModule } from './login/login.module';
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
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewStudentInfoComponent } from './view-student-info/view-student-info.component';
import { StudentAdmissionsEditComponent } from './student-admissions-edit/student-admissions-edit.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentsRecentlyCreatedComponent } from './students-recently-created/students-recently-created.component';
import { LoadingBubbleComponent } from './loading-bubble/loading-bubble.component';
import { AcademicYearComponent } from './academic-year/academic-year.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { ViewAcademicYearComponent } from './view-academic-year/view-academic-year.component';
import { AcademicYearArchivesComponent } from './academic-year-archives/academic-year-archives.component';
import { ViewAcademicYearInfoComponent } from './view-academic-year-info/view-academic-year-info.component';
import { AcademicYearFinancialPlanComponent } from './academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearSubjectUnitsComponent } from './academic-year-subject-units/academic-year-subject-units.component';
import { LibrarySearchCatalogueComponent } from './library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from './library-my-account/library-my-account.component';
import { LibraryAdminComponent } from './library-admin/library-admin.component';
import { AcademicsCurriculumComponent } from './academics-curriculum/academics-curriculum.component';
import {
  AcademicsCurriculumUnitCategoriesComponent
} from './academics-curriculum-unit-categories/academics-curriculum-unit-categories.component';
import {
  AcademicsCurriculumUnitsComponent
} from './academics-curriculum-units/academics-curriculum-units.component';
import {
  AcademicsCurriculumClassLevelCategoriesComponent
} from './academics-curriculum-class-level-categories/academics-curriculum-class-level-categories.component';
import {
  AcademicsCurriculumClassLevelsComponent
} from './academics-curriculum-class-levels/academics-curriculum-class-levels.component';
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
import { SelectComponent } from './select/select.component';
import { CrudComponent } from './crud/crud.component';
import { ViewComponent } from './view/view.component';
import { DescriptionComponent } from './description/description.component';
import { ViewStudentGuardiansComponent } from './view-student-guardians/view-student-guardians.component';
import { ViewStudentAcademicsComponent } from './view-student-academics/view-student-academics.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    FullWithCenterComponent,
    LoginContactAdminComponent,
    LoginResetComponent,
    InputComponent,
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
    CreateStudentComponent,
    EditStudentComponent,
    LabelStarRequiredComponent,
    ViewStudentComponent,
    ViewStudentInfoComponent,
    StudentAdmissionsEditComponent,
    StudentSearchComponent,
    StudentsRecentlyCreatedComponent,
    LoadingBubbleComponent,
    AcademicYearComponent,
    CreateAcademicYearComponent,
    ViewAcademicYearComponent,
    AcademicYearArchivesComponent,
    ViewAcademicYearInfoComponent,
    AcademicYearFinancialPlanComponent,
    AcademicYearSubjectUnitsComponent,
    LibrarySearchCatalogueComponent,
    LibraryMyAccountComponent,
    LibraryAdminComponent,
    AcademicsCurriculumComponent,
    AcademicsCurriculumUnitCategoriesComponent,
    AcademicsCurriculumUnitsComponent,
    AcademicsCurriculumClassLevelCategoriesComponent,
    AcademicsCurriculumClassLevelsComponent,
    ViewItemsComponent,
    ChipsComponent,
    BreadcrumbComponent,
    CreateUnitCategoriesComponent,
    EditUnitCategoryComponent,
    ViewUnitCategoryComponent,
    ViewUnitComponent,
    EditUnitComponent,
    CreateUnitComponent,
    CreateClassLevelCategoryComponent,
    ViewClassLevelCategoryComponent,
    EditClassLevelCategoryComponent,
    EditClassLevelComponent,
    ViewClassLevelComponent,
    CreateClassLevelComponent,
    SelectComponent,
    CrudComponent,
    ViewComponent,
    DescriptionComponent,
    ViewStudentGuardiansComponent,
    ViewStudentAcademicsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    LoginModule,
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
    ErrorModule
  ],
  exports: [LoginComponent, HomeComponent, ToastComponent]
})
export class ComponentsModule {}
