import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamBankAdminComponent } from './exam-bank-admin.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { AdminExamPaperComponent } from './admin-exam-paper/admin-exam-paper.component';
import { AdminExamPaperViewComponent } from './admin-exam-paper-view/admin-exam-paper-view.component';
import { AdminExamPaperEditComponent } from './admin-exam-paper-edit/admin-exam-paper-edit.component';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ExamBankAdminComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'exams',
    data: {
      breadcrumb: null
    },
    children: [
      {
        path: 'create',
        component: CreateExamComponent,
        data: {
          breadcrumb: 'Create'
        }
      },
      {
        path: ':id',
        component: AdminExamPaperComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'view'
          },
          {
            path: 'view',
            component: AdminExamPaperViewComponent,
            data: {
              breadcrumb: 'View'
            }
          },
          {
            path: 'edit',
            component: AdminExamPaperEditComponent,
            canDeactivate: [CanDeactivateGuard],
            data: {
              breadcrumb: 'Edit'
            }
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
export class ExamBankAdminRoutingModule { }
