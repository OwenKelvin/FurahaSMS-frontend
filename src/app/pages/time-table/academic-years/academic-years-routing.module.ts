import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableAcademicYearViewComponent } from './time-table-academic-year-view/time-table-academic-year-view.component';


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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicYearsRoutingModule { } 
