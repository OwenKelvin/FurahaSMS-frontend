import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamBankArchivesComponent } from './exam-bank-archives.component';
import { ExamViewModeComponent } from './exam-view-mode/exam-view-mode.component';
import { ExamRevisionModeComponent } from './exam-revision-mode/exam-revision-mode.component';
import { ViewExamComponent } from './view-exam/view-exam.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ExamBankArchivesComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'exams',
    data: {
      breadcrumb: 'Exams'
    },
    children: [
      {
        path: ':id',
        component: ViewExamComponent,
        data: {
          breadcrumb: null
        },
        children: [
          {
            path: '',
            redirectTo: 'view'
          },
          {
            path: 'view',
            data: {
              breadcrumb: 'View'
            },
            component: ExamViewModeComponent
          },
          {
            path: 'revision',
            data: {
              breadcrumb: 'Revision'
            },
            component: ExamRevisionModeComponent
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
export class ExamBankArchivesRoutingModule { }
