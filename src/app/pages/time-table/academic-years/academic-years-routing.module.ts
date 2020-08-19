import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableAcademicYearViewComponent } from './time-table-academic-year-view/time-table-academic-year-view.component';
import { TimeTableAcademicYearEditComponent } from './time-table-academic-year-edit/time-table-academic-year-edit.component';
import { TimeTableAcademicYearDashboardComponent } from './time-table-academic-year-dashboard/time-table-academic-year-dashboard.component';


const routes: Routes = [
  {
    path: ':id',
    children: [
      {
        path: '',
        pathMatch: 'full',
        data: {
          breadcrumb: null
        },
        component: TimeTableAcademicYearDashboardComponent
      },
      {
        path: 'timetables/:id',
        pathMatch:'full',
        data: {
          breadcrumb: 'View'
        },
        component: TimeTableAcademicYearViewComponent
      },
      {
        path: 'timetables/:id/edit',
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
