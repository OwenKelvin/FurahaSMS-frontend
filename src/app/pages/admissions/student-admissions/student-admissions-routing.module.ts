import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { StudentAdmissionsEditComponent } from './student-admissions-edit/student-admissions-edit.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StudentAdmissionComponent,
    data: {
      breadcrumb: null
    },
  },
  {
    path: 'create',
    component: CreateStudentComponent,
    canDeactivate: [CanDeactivateGuard],
    data: {
      breadcrumb: 'Create Student'
    },
  },
  {
    path: 'edit',
    component: StudentAdmissionsEditComponent,
    data: {
      breadcrumb: 'Edit Student'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAdmissionsRoutingModule { }
