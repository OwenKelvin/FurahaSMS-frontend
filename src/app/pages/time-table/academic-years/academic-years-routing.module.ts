import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableAcademicYearViewComponent } from './time-table-academic-year-view/time-table-academic-year-view.component';
import { TimeTableAcademicYearEditComponent } from './time-table-academic-year-edit/time-table-academic-year-edit.component';


const routes: Routes = [
  {
    path: ':id',
    children: [
      {
        path: 'view',
        data: {
          breadcrumb: 'View'
        },
        component: TimeTableAcademicYearViewComponent
      },
      {
        path: 'edit',
        data: {
          breadcrumb: 'Edit'
        },
        component: TimeTableAcademicYearEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicYearsRoutingModule { }
