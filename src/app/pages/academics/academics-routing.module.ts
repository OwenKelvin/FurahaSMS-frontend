import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicsComponent } from './academics.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AcademicsComponent,
    data: {
      breadcrumb: null
    },
  },
  {
    path: 'academic-year',
    data: {
      breadcrumb: 'Academic Year'
    },
    loadChildren: () => import('./academic-year/academic-year.module')
      .then(m => m.AcademicYearModule)
  }, {
    path: 'curriculum',
    data: {
      breadcrumb: 'Curriculum'
    },
    loadChildren: () => import('./curriculum/curriculum.module')
      .then(m => m.CurriculumModule)

  }, {
    path: 'exam-bank',
    loadChildren: () => import('../academics/exam-bank/exam-bank.module').then(m => m.ExamBankModule),
    data: {
      breadcrumb: 'Exam Bank'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }
