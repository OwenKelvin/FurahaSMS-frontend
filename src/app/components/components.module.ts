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
