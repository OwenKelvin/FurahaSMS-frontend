import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TakeOnlineExamDashboardComponent} from './take-online-exam-dashboard/take-online-exam-dashboard.component';
import {TakeOnlineTestComponent} from './take-online-test/take-online-test.component';

const routes: Routes = [
  {
    path: ':id',
    data: {
      breadcrumb: 'Assessment'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TakeOnlineExamDashboardComponent,
        data: {
          breadcrumb: null
        }
      },
      {
        path: 'take',
        component: TakeOnlineTestComponent,
        data: {
          breadcrumb: null
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OnlineAssessmentRoutingModule {
}
